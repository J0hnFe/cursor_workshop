#!/usr/bin/env bash
# Checks Node.js and Git for this workshop. Works on macOS, Linux, and Windows (Git Bash).
# Optional: bash scripts/check-setup.sh --install  (tries winget on Windows, Homebrew on macOS)

set -u

NODEJS_URL="https://nodejs.org/en/download/"
GIT_WINDOWS_URL="https://git-scm.com/download/win"
WINGET_NODE="OpenJS.NodeJS.LTS"
WINGET_GIT="Git.Git"

say() { printf '%s\n' "$*"; }

kernel="$(uname -s 2>/dev/null || echo unknown)"
case "$kernel" in
  Darwin) os="macOS" ;;
  Linux*) os="Linux" ;;
  MINGW* | MSYS* | CYGWIN*) os="Windows" ;;
  *) os="Unix ($kernel)" ;;
esac

INSTALL=false
for a in "$@"; do [[ "$a" == "--install" ]] && INSTALL=true; done

have() { command -v "$1" >/dev/null 2>&1; }

node_ver() { have node && node --version 2>/dev/null | head -n1 || true; }
git_ver() { have git && git --version 2>/dev/null | head -n1 || true; }

try_winget() {
  # Git Bash often does not put WindowsApps on PATH; try several wrappers Windows ships with.
  local id="$1"
  local wg="" ex=0

  if have winget.exe; then
    winget.exe install --id "$id" -e --accept-source-agreements --accept-package-agreements
    return $?
  fi
  if have winget; then
    winget install --id "$id" -e --accept-source-agreements --accept-package-agreements
    return $?
  fi

  if [[ -n "${LOCALAPPDATA:-}" ]] && have cygpath; then
    wg="$(cygpath -u "$LOCALAPPDATA" 2>/dev/null)/Microsoft/WindowsApps/winget.exe"
    if [[ -x "$wg" ]]; then
      MSYS2_ARG_CONV_EXCL='*' "$wg" install --id "$id" -e --accept-source-agreements --accept-package-agreements
      return $?
    fi
  fi

  if have cmd.exe; then
    MSYS2_ARG_CONV_EXCL='*' cmd.exe //c "winget install --id $id -e --accept-source-agreements --accept-package-agreements"
    ex=$?
    [[ $ex -eq 0 ]] && return 0
  fi

  if have powershell.exe; then
    MSYS2_ARG_CONV_EXCL='*' powershell.exe -NoProfile -ExecutionPolicy Bypass -Command \
      "winget install --id $id -e --accept-source-agreements --accept-package-agreements"
    return $?
  fi
  return 1
}

nv="$(node_ver)"
gv="$(git_ver)"
[[ -n "$nv" ]] && node_ok=true || node_ok=false
[[ -n "$gv" ]] && git_ok=true || git_ok=false

if $INSTALL && [[ "$os" == "Windows" ]]; then
  winget_tried=false
  if ! $node_ok; then try_winget "$WINGET_NODE" || true; winget_tried=true; fi
  if ! $git_ok; then try_winget "$WINGET_GIT" || true; winget_tried=true; fi
  nv="$(node_ver)"; gv="$(git_ver)"
  [[ -n "$nv" ]] && node_ok=true || node_ok=false
  [[ -n "$gv" ]] && git_ok=true || git_ok=false
  if $winget_tried; then say "If winget installed anything, open a new terminal and run this script again."; fi
fi

if $INSTALL && [[ "$os" == "macOS" ]] && have brew && { ! $node_ok || ! $git_ok; }; then
  brew install node git || true
  nv="$(node_ver)"; gv="$(git_ver)"
  [[ -n "$nv" ]] && node_ok=true || node_ok=false
  [[ -n "$gv" ]] && git_ok=true || git_ok=false
  say "If Homebrew just installed something, you may need a new terminal window."
fi

if $INSTALL && [[ "$os" == "Linux" ]]; then
  say "On Linux, install packages with your distro (see below); this script does not run apt/dnf for you."
fi

say ""
say "Workshop setup check — detected: $os"
say ""
if $node_ok; then say "  Node.js: OK — $nv"; else say "  Node.js: not found"; fi
if $git_ok; then say "  Git:     OK — $gv"; else say "  Git:     not found"; fi
say ""

if $node_ok && $git_ok; then
  say "You are ready:  npm install  &&  npm run dev"
  exit 0
fi

say "Install what is missing, then run this script again."
say ""
if ! $git_ok; then
  if [[ "$os" == "Windows" ]]; then
    say "Git:  $GIT_WINDOWS_URL"
    say "      or:  winget install --id $WINGET_GIT -e --accept-source-agreements --accept-package-agreements"
  else
    say "Git:  macOS: xcode-select --install   or   brew install git"
    say "      Debian/Ubuntu: sudo apt update && sudo apt install -y git"
    say "      Fedora: sudo dnf install -y git"
  fi
  say ""
fi

if ! $node_ok; then
  say "Node.js (LTS): $NODEJS_URL"
  if [[ "$os" == "macOS" ]]; then say "      or:  brew install node"; fi
  if [[ "$os" == "Linux" ]]; then say "      or:  sudo apt install -y nodejs npm  (or nvm / a newer Node from $NODEJS_URL)"; fi
  if [[ "$os" == "Windows" ]]; then
    say "      or:  winget install --id $WINGET_NODE -e --accept-source-agreements --accept-package-agreements"
  fi
fi

if [[ "$os" == "Windows" ]]; then
  say ""
  say "Tip: use Git Bash (from Git for Windows) or WSL so bash is available."
fi
exit 1
