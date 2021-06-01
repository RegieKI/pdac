## PDAC 

*pdac* is the production repository combining [pdac-backend](https://github.com/RegieKI/pdac-backend) and [pdac-frontend](https://github.com/RegieKI/pdac-frontend). 

* *pdac-frontend* exists as a production build within the [app folder](https://github.com/RegieKI/pdac/tree/stable/app) 
* *pdac-backend* exists as a submodule in the root
* *system* contains common system utilities for cloud syncing, wifi, etc
* application is launched via `AUTOSTART.sh`<sup>1</sup> or with [system autostart](https://github.com/RegieKI/pdac/blob/stable/system/autostart.sh)<sup>2</sup>


**Directories**

Directories should be placed in default pi user directory like so:

```
/home/pi/pdac
/home/pi/pdac/pdac-backend
/home/pi/pdac-frontend <- if compiling a new frontend build
/home/pi/pdac/usb <- keep clear (mounting point for USB)
```

**Prerequisites**

* *OS* - Kernel 5.4, `rpi-update` circa 2020
* *configuration* - IMX477 enabled, [autr/waveshare-overlays]() installed, see [piconf](https://github.com/autr/piconf/blob/main/installWaveshareLCD.sh)<sup>3</sup>
* *python* - various [see list]()
* *node* - >=v14, recommended [nvm](https://github.com/nvm-sh/nvm) && [pnpm](https://pnpm.io/)
* *USB* - formatted and prepared exFAT with label `USB`
* *X11* - various changes, for dual-screen [use evdev](https://github.com/autr/piconf/tree/main/usr/share/X11/xorg.conf.d), not ~~libinput~~ <sup>4</sup>

**Notes**

<sup>1</sup> recommended method is creating an entry at `~/.config/autostart/pdac-autostart.desktop` \
<sup>2</sup> launches LXTerminal visibly on LCD touchscreen \
<sup>3</sup> [backup or restore](https://github.com/autr/piconf) optimal settings for SPI GPIO LCDs and IMX477 sensor \
<sup>4</sup> only neccesary if setting up dual displays, CVBS or HDMI

**Installation**

```
cd /home/pi
git clone --recursive https://github.com/RegieKI/pdac.git
git clone https://github.com/RegieKI/pdac-frontend.git
cd pdac/app
npm i --production
```

**Utilities**

!!!include(../pdac/SYS.md)!!!


**Links**

* [ezapi](https://github.com/autr/ezapi) - autoconfiguring API toolkit
* [ezlib](https://github.com/autr/ezlib) - utility endpoints for *ezapi*
* [piapi](https://github.com/autr/piapi) - Raspberry Pi remote user interface


#### License

[MIT](https://github.com/RegieKI/pdac/blob/main/LICENSE-MIT.md)