
# Updating to v2.0

```

# prepare...

cd /home/pi/pdac && 
/home/pi/pdac/system/killAll.sh &&

# setup auto-credentials...

git config user.name "regiekidevice" &&
git config user.password "7jYAqVTyH4eZuA"  &&
git config --global credential.helper store  &&

# reset origin to current remote...

git remote remove origin  &&
git remote add origin https://github.com/RegieKI/pdac.git  &&
git fetch  &&

# track main rather than master...

git checkout --track origin/main  &&

# remove old folders, to be replaced by submodules...

rm -rf /home/pi/pdac/pdac-backend &&
rm -rf /home/pi/pdac/pdac-frontend &&

# alias for git pull && git submodule update --init --recursive...

git update  &&

# pesky submodule nonsense, force reset...

git submodule foreach git reset --hard &&

# run update to check, causing reboot...

/home/pi/pdac/system/updateSystem.sh
```

# Updating to v1.2

See individual version notes for specifics:

[V1.2 Notes](./v12.md)

No sleep:

```
sudo nano /etc/lightdm/lightdm.conf
# add no sleep
xserver-command=X -s 0 dpms
```

Kernal 5.4:

```
sudo rpi-update
```

# Misc

Install v4l2loopback devices (optional - not currently used): 

```
# install kernel sources (from here) https://github.com/notro/rpi-source/wiki

sudo apt-get install git bc bison flex libssl-dev
sudo wget https://raw.githubusercontent.com/notro/rpi-source/master/rpi-source -O /usr/local/bin/rpi-source && sudo chmod +x /usr/local/bin/rpi-source && /usr/local/bin/rpi-source -q --tag-update
rpi-source

# compile v4l2loopback and install

git clone https://github.com/umlaeute/v4l2loopback
cd v4l2loopback
make 
sudo make install
sudo depmod -a
sudo modprobe v4l2loopback

# check, alles ok

v4l2-ctl --list-devices

```
