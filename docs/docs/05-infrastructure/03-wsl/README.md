---
sidebar_position: 1
---

# WSL2

## 사전 설치
### Windows Terminal
- [Windows Terminal v1.19.10821.0 파일](https://github.com/microsoft/terminal/releases/download/v1.19.10821.0/Microsoft.WindowsTerminal_1.19.10821.0_8wekyb3d8bbwe.msixbundle)
  - https://github.com/microsoft/terminal/releases

### VSCode
- [VSCode 파일](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)
- 확장 도구
  - [Remote Development 파일](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
  - [Docker 파일](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

<br/>

## WSL2
### WSL2 설치
```powershell
# 1. 관리자 권한 Windows Terminal 실행

# 2. 윈도우 버전 확인
#   - OS Version: 10.0.19045 N/A Build 19045        <- x64 시스템의 경우: 버전 1903 이상, 빌드 18362.1049 이상.
cmd.exe /c ver
winver
systeminfo

# 3. Windows 기능 On
# optionalfeatures

# 3.1 Linux용 Windows 하위 시스템 사용
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# 3.2 Virtual Machine 기능 사용
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

# 4. Linux 커널 업데이트 패키지 다운로드 & 설치
https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

# 5. WSL 2를 기본 버전으로 설정
wsl --set-default-version 2
```

### WSL2 가상화 운영체제 파일
- [wsl_update_x64.msi 파일](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)
- Ubuntu
  - 24-04 LTS `noble`: [ubuntu-noble-wsl-amd64-wsl.rootfs.tar.gz](https://cloud-images.ubuntu.com/wsl/noble/current/ubuntu-noble-wsl-amd64-wsl.rootfs.tar.gz)
  - 22.04 LTS `jammy`: [ubuntu-jammy-wsl-amd64-wsl.rootfs.tar.gz](https://cloud-images.ubuntu.com/wsl/jammy/current/ubuntu-jammy-wsl-amd64-wsl.rootfs.tar.gz)
  - 20.04 LTS `focal`: [ubuntu-20.04-server-cloudimg-amd64-wsl.rootfs.tar.gz 파일](https://cloud-images.ubuntu.com/releases/focal/release/ubuntu-20.04-server-cloudimg-amd64-wsl.rootfs.tar.gz)
  - 18.04 LTS `bionic`: [ubuntu-18.04-server-cloudimg-amd64-wsl.rootfs.tar.gz 파일](https://cloud-images.ubuntu.com/releases/bionic/release/ubuntu-18.04-server-cloudimg-amd64-wsl.rootfs.tar.gz)

### WSL2 가상화 설치
```powershell
# 폴더 생성
#   - WSL 가상화 볼륨 경로: E:\Workspace\wsl\Ubuntu\20.04\Volume
#   - WSL 가상화 운영체제 경로: E:\Workspace\wsl\Ubuntu\20.04\Releases
mkdir -p E:\Workspace\wsl\Ubuntu\20.04\Volume
mkdir -p E:\Workspace\wsl\Ubuntu\20.04\Releases
#   - 파일 복사
#     ubuntu-20.04-server-cloudimg-amd64-wsl.rootfs.tar.gz

# 설치: --import <Distro> <InstallLocation> <FileName> [옵션]
wsl --import ubuntu20.04 `
    E:\Workspace\wsl\Ubuntu\20.04\Volume `
    E:\Workspace\wsl\Ubuntu\20.04\Releases\ubuntu-20.04-server-cloudimg-amd64-wsl.rootfs.tar.gz `
    --version 2

# 제거: --unregister
wsl --unregister ubuntu20.04

# 목록: --list, -l [옵션], --verbose, -v
wsl -l -v
  NAME                   STATE           VERSION
* xyz                    Stopped         2
  ubuntu20.04            Stopped         2

# 실행: --distribution, -d
wsl -d ubuntu20.04

# root 패스워크 변경
passwd

# 종료: --terminate, -t
wsl -t ubuntu20.04
```

### WSL2 계정
```powershell
# 계정 생성
adduser {사용자명}

# sudo 그룹 추가
usermod -aG sudo {사용자명}

# sudo 그룹 추가 확인 1/2
cat /etc/group
	sudo:x:27:{사용자명}

# sudo 그룹 추가 확인 2/2: 사용자명 로인 후
{사용자명}@{호스트명}:~$ id
	uid=27(sudo)

# 계정 접속 테스트
su - {사용자명}       # {사용자명} 계정 로그인
```

```powershell
# root 권한에서 로그인 기본 계정을 지정한다: /etc/wsl.conf 파일을 생성한다
tee /etc/wsl.conf <<_EOF
[user]
default={사용자명}
_EOF
```

```powershell
# 계정 로그인: --user, -u
wsl -d ubuntu20.04            # 기본 계정 로그인
wsl -d ubuntu20.04 -u root    # root 계정 로그인
wsl -d ubuntu20.04 -u {사용자명}    # {사용자명} 계정 로그인
```

### WSL2 기본 가상화 실행
```powershell
# 기본: --set-default, -s
wsl -s ubuntu20.04

# 기본 확인
wsl -l -v
  NAME                   STATE           VERSION
* ubuntu20.04            Running         2
  xyz                    Running         2

# 실행
wsl                   # 기본 가상화 실행
wsl -d ubuntu20.04    # ubuntu20.04 가상화 실행
```

### WSL2 파일 공유
```powershell
# 윈도우 -> WSL
\\wsl$                # 윈도우 탐색기에서 입력

# 윈도우 <- WSL
mount -l

cd /mnt
ls -al
  c  d  e  wsl  wslg

cd /mnt/c             # 윈도우 C:\ 드라이브
ls -al
```

### WSL2 자원 설정
- 설정 범위
  - 전역 설정: **%userprofile%**, `.wslconfig`
  - 지역 설정: `wsl.conf`
- 세부 정보
  - [Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config)

```ini
[wsl2]
memory=48GB
processors=8
swap=0
localhostForwarding=true
kernelCommandLine = "sysctl.vm.max_map_count=262144"
```
<br/>

## SSH 구성
### SSH 서버: WSL Ubuntu 서버
```powershell
# 시스템에 대한 모든 호스트 키를 생성합니다
sudo ssh-keygen -A

# ssh 접속시 암호 입력
sudo vi /etc/ssh/sshd_config
    PasswordAuthentication yes

# 서비스 재시작
sudo service ssh restart

# IP 확인
ip a
```

### SSH 클라이언트: 윈도우
```powershell
# 1. WSL 서버: Home 디렉토리에 .ssh 폴더를 생성하기(없다면)
ssh {사용자명}@{접속 IP}
mkdir ~/.ssh
ls -al

# 2. 윈도우: SSH 키 생성 : RSA 기반 형식으로 키 만들기
#   - $env:USERPROFILE\.ssh\id_rsa
#   - $env:USERPROFILE\.ssh\id_rsa.pub
ssh-keygen

# 3. 윈도우: SSH Public 키 내용 복사
type $env:USERPROFILE\.ssh\id_rsa.pub | ssh {사용자명}@{접속 IP} "cat >> .ssh/authorized_keys"

# 4. 윈도우: SSH 접속
ssh {사용자명}@{접속 IP}
```

### VSCode 접속 정보
- `$env:USERPROFILE\.ssh\config`

```
Host "WSL | {접속 IP}"
    HostName {접속 IP}
    User {사용자명}

Host *
    StrictHostKeyChecking no
```

<br/>

## Docker Desktop
### Docker Desktop 설치
- https://www.docker.com/products/docker-desktop/

### 이미지 기본 경로 변경
- Case 1.
```powershell
wsl --shutdown
wsl --export docker-desktop-data docker-desktop-data.tar
wsl --unregister docker-desktop-data
wsl --import docker-desktop-data D:\docker-new-repo\ docker-desktop-data.tar --version 2
```

- Case 2.
```powershell
C:\ProgramData\Docker\config and add daemon.json

{
 "data-root": "E:\\ProgramData\\Docker"
}
```

- Case 3.
```powershell
# Link AppData - Replace youruser with actual user
mklink /j "C:\Users\youruser\AppData\Local\Docker" "E:\Docker\AppData"

# Link ProgramData
mklink /j "C:\ProgramData\Docker" "E:\Docker\ProgramData"
```

<br/>

## 참고 동영상
- [윈도우 개발환경 세팅 - WSL2, Windows Terminal, Docker 설치](https://www.youtube.com/watch?v=J9pxPVcd-fY&t)
- [Windows 환경에서 리눅스를 사용해보자 - WSL2 Ubuntu 설치 및 설정 방법](https://www.youtube.com/watch?v=xUNDErAbRiM)
