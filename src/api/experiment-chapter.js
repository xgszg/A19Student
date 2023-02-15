export default {
  chapters: [{
    id: '1',
    name: '熟悉实验环境',
    status: true
  }, {
    id: '2',
    name: '操作系统的引导',
    status: true
  }, {
    id: '3',
    name: '系统调用',
    status: true
  }, {
    id: '4',
    name: '进程运行轨迹的跟踪与统计',
    status: true
  }, {
    id: '5',
    name: '基于内核栈切换的进程切换',
    status: true
  }, {
    id: '6',
    name: '信号量的实现和应用',
    status: true
  }, {
    id: '7',
    name: 'proc文件系统的实现',
    status: false
  }, {
    id: '8',
    name: 'C 语言实现 Linux pwd 命令',
    status: false
  }, {
    id: '9',
    name: 'C 语言实现 Linux touch 命令',
    status: false
  }, {
    id: '10',
    name: 'C 语言实现文件类型统计程序',
    status: false
  }],
  contents: [{
    id: '0',
    content: `本操作系统实验的硬件环境是IA-32(x86)架构的PC机（就是你现在正在使用的计算机），主要软件环境是Bochs + gcc + 你最喜欢的编辑器/IDE + 你最喜欢的操作系统 + Linux 0.11源代码。实验的基本流程是根据实验要求编写应用程序、修改Linux 0.11的源代码，用gcc编译后，在Bochs的虚拟环境中运行、调试目标代码。

上述实验环境涉及到的软件都是免费且开源的，具有较强的可移植性，可以在多种计算机的多种操作系统上搭建。为方便实验者，我们在最常见的两个平台——Windows和Ubuntu（最流行的GNU/Linux发行版之一）——上制作了hit-oslab集成环境。它基本包含了实验所需的所有软件，安装过程非常简单。对于其他平台，可参考集成环境搭建实验环境，本书不做介绍。

## 主要平台和工具简介

### x86模拟器Bochs

Bochs是一个免费且开放源代码的IA-32(x86)架构PC机模拟器。在它模拟出的环境中可以运行Linux、DOS和各种版本的Windows等多种操作系统。而Bochs本身具有很高的移植性，可以运行在多种软硬件平台之上，这也是我们选择它做为本书的指定模拟器的主要原因。如果您想拥抱自由的Linux，那么Bochs几乎是您的不二选择。如果您想继续把自己绑定在Windows平台上，那么除了Bochs，您还可以选用VMware或者Microsoft Virtual PC。它们是最著名虚拟机软件，而且都可以免费使用。因为Bochs的是模拟器，其原理决定了它的运行效率会低于虚拟机。但对于本书所设计的实验来说，效率上的差别很不明显。而且，Bochs有虚拟机无可比拟的调试操作系统的能力，所以我们更建议您选用Bochs。hit-oslab已经内置了bochs，本书后文假定的缺省环境也是Bochs。

关于Bochs的更详细的介绍请访问它的主页及[Bochs使用手册](https://hoverwinter.gitbooks.io/hit-oslab-manual/content/bochs-manual.html)。

### GCC编译器

GCC是和Linux一起成长起来的编译器。Linux最初的版本就是由GCC编译的。现在GCC也是在自由软件领域应用最广泛的编译器。所以，我们也选择GCC做为本书实验的指定编译器。

### DB调试器

GDB调试器是GCC编译器的兄弟。做为自由软件领域几乎是唯一的调试器，它秉承了*nix类操作系统的一贯风格，采用纯命令行操作，有点儿类似dos下的debug。关于它的使用方法请看GDB使用手册。

### Ubuntu (GNU/Linux)

Ubuntu也许不是目前最好用的Linux桌面发行版，但它一定是最流行的。主要特点是易用，非常的易用。

现在，已经有越来越多的人开始用Ubuntu完全代替Windows，享受更加自由、安全、守法的感觉。Ubuntu的主页是http://www.ubuntu.com/ ，这里不仅可以免费下载到iso文件，甚至能免费申领Ubuntu的安装光盘。

我们强烈建议您在Ubuntu下做实验。因为有些实验内容涉及到在自己改进的Linux 0.11下，运行自己编的应用程序。被改进的功能都是高版本Linux内核已经具有的，在其上确认自己编写的应用程序无误后，再用之测试自己改进的Linux 0.11，可以更有信心些。

### Microsoft Windows

人类历史上最重要的操作系统之一，用户最多的操作系统（没有之一），天下谁人不识君。

### 源代码阅读工具

实验过程中不可避免地要阅读Linux 0.11的源代码。源代码阅读工具能让这个过程的效率更高，烦恼更少。

http://www.oldlinux.org/lxr/http/source/ 是用lxr生成的一个Linux源代码阅读网站。只要用鼠标点击，就能轻松浏览Linux 0.11的源代码。

但在不能上网的时候，或者阅读的同时还要修改源代码，就要使用下面介绍的工具了。

在Linux下，ctags可以和VIM或Emacs配合，一边浏览代码，一边编辑。在Ubuntu下这样安装：

$ sudo apt-get install exuberant-ctags

使用起来也不麻烦，网上资料很多，man文档也很详细。

在Windows下，Source Insight是个不错的选择。

### CodeView-oslab集成环境

0603102班的高汉东同学在使用hit-oslab后，对它深恶痛绝，他是这么说的：

“……在阅读linux-0.11源代码的的过程中，我们经常遇到一个问题：在一个文件中调用的函数并不在这个文件中定义，即所调用的函数是一个外部函数。为了找到这个函数的定义，我们要不就翻遍文件夹内所有的文件，要不就在“内核注释”中搜索。这两种方法都可以解决，但是很麻烦。……”

于是，他伙同几名同学，开发了CodeView，并和oslab深度集成。该软件为开源软件，支持Windows和Linux，不仅欢迎下载，而且欢迎有识之士提交建议、补丁，甚至加盟。

## 实验环境的工作模式

hit-oslab实验环境简称oslab，可在“[资料和文件](https://github.com/traitorousfc/HIT-OSLab/tree/master/Resources)”下载。oslab工作在一个宿主操作系统之上，分为Linux版和Win32版。其中Linux版主要针对Ubuntu的32位和64位版设计，但稍加修改甚至完全不修改，也可以在其它Linux发行版使用。这是我们主要推荐的版本。Win32版主要针对Windows XP设计，不能很好地支持Windows Vista。

在宿主操作系统之上完成对Linux 0.11的开发、修改和编译之后，在linux-0.11目录下会生产一个名为Image的文件，它就是编译之后的目标文件。该文件内已经包含引导和所有内核的二进制代码。如果拿来一张软盘，从它的0扇区开始，逐字节写入Image文件的内容，就可以用这张软盘启动一台真正的计算机，并进入Linux 0.11内核。oslab采用bochs模拟器加载这个文件，模拟执行Linux 0.11，这样省却了重新启动计算机的麻烦。

bochs目录下是与bochs相关的执行文件、数据文件和配置文件。run是运行bochs的脚本命令。运行后bochs会自动在它的虚拟软驱A和虚拟硬盘上各挂载一个镜像文件，软驱上挂载是linux-0.11/Image，硬盘上挂载的是hdc-0.11.img。因为bochs配置文件中的设置是从软驱A启动，所以Linux 0.11会被自动加载。而Linux 0.11会驱动硬盘，并mount硬盘上的文件系统，也就是将hdc-0.11.img内镜像的文件系统挂载到0.11系统内的根目录——“/”。在0.11下访问文件系统，访问的就是hdc-0.11.img文件内虚拟的文件系统。

hdc-0.11.img文件的格式是Minix文件系统的镜像。Linux所有版本都支持这种格式的文件系统，所以可以直接在宿主Linux上通过mount命令访问此文件内的文件，达到宿主系统和bochs内运行的Linux 0.11之间交换文件的效果。Windows下目前没有（或者是还没发现）直接访问Minix文件系统的办法，所以要借助于fdb.img，这是一个1.44M软盘的镜像文件，内部是FAT12文件系统。将它挂载到bochs的软驱B，就可以在0.11中访问它。而通过filedisk或者WinImage，可以在Windows下访问它内部的文件。

hdc-0.11.img内包含有：

- Bash shell
- 一些基本的Linux命令、工具，比如cp、rm、mv、tar。
- vi编辑器
- gcc 1.4编译器，可用来编译标准C程序
- as86和ld86
- Linux 0.11的源代码，可在0.11下编译，然后覆盖现有的二进制内核
- Linux上的实验环境[编辑]

感谢兰州大学的falcon，他写了一篇详细的文章介绍如何在Linux下搭建Linux 0.11的实验环境，并且给出了相应的补丁。本环境大量参考和继承了他所做的工作。

### 环境搭建

### Ubuntu下环境搭建

首先，到“资料和文件”中下载“[hit-oslab-linux-XXXXXXXX.tar.gz](https://github.com/traitorousfc/HIT-OSLab/tree/master/Resources)”。此文件包中包括下列内容：

- 可在Ubuntu下编译的Linux 0.11内核源代码。

- 已打开gdb-stub功能的Bochs及其支撑文件、配置文件。Ubuntu自带的Bochs没有gdb-stub功能，不能用GDB进行C语言级的调试。

- 可忽略Signal 0的GDB调试器。GDB是为调试应用程序而设计，而应用程序不需要处理signal 0，所以GDB捕获到signal 0后会强制暂停程序。Bochs（也许是Linux 0.11内核）会产生大量的signal 0，影响调试。我们给GDB打了一个补丁，使其可以忽略signal 0。

- 磁盘镜像文件hdc-0.11-new.img。它是Linux 0.11的根文件系统，内含gcc、vi等开发工具和bash等常用工具。

- 方便运行、调试和文件交换的一系列脚本。

- 建议将oslab.tar.gz保存到你的home目录(/home/xxxx (xxxx是你的用户名) )下。然后打开终端窗口（左上角的菜单，Applications->Accessories->Terminal），当前目录就是你的home目录。这个窗口是将来要使用的主要窗口。在提示符下执行如下命令（不包括那个“$”）解压缩下载的文件：

  $ tar zxf oslab.tar.gz

用ls命令列目录如果能看到“oslab”目录，就说明解压缩成功。这个目录下已经包括Linux-0.11源代码、Bochs、GDB和一些数据文件及脚本。但我们还需要安装编译器和编辑器等开发环境。

首先安装[gcc-3.4](https://github.com/traitorousfc/HIT-OSLab/tree/master/Resources)。因为Linux-0.11不能在gcc 4.x版本编译，所以要装老一点儿的编译器。在Ubuntu 9.04(jaunty)及之前，用下面命令安装：

\`\`\`
$ sudo apt-get install gcc-3.4
\`\`\`

在Ubuntu 9.10(karmic)及之后，要先从“资料和文件”中下载gcc-3.4-ubuntu.tar.gz到/tmp目录，用下列命令安装：

\`\`\`
$ cd /tmp
$ tar zxvf gcc-3.4-ubuntu.tar.gz
$ cd gcc-3.4
$ sudo ./inst.sh xxxx #xxxx换为i386或amd64
\`\`\`

然后执行下列命令确保其它必备工具已安装：

\`\`\`
$ sudo apt-get install build-essential bin86 manpages-dev
\`\`\`

如果使用的是64位的系统，还要：

\`\`\`
$ sudo apt-get install libc6-dev-i386 ia32-libs ia32-libs-gtk
\`\`\`

还要安装你喜欢（或将来会喜欢）的编辑器/IDE。我们推荐vim：

\`\`\`
$ sudo apt-get install vim cscope exuberant-ctags
\`\`\`

也推荐emacs：

\`\`\`
$ sudo apt-get install emacs
\`\`\`

“vimtutor”是一个非常简单直接的vim入门培训命令，安装了vim后，它就已经存在，可以试试。

Linux上肯定也有类似Windows的编辑器，但并不推荐它们，因为真正的Linuxer只喜欢vi或者emacs。

选择了一种编辑器，就选择了一种文化和生活习惯，所以请慎重选择。

至此，环境搭建完毕。

Fedora下环境搭建

本节由计算机学院09级杨靖同学撰写。

首先，请参考Ubuntu实验环境的搭建，下载并解压hit-oslab包。

之后是安装必要的工具：gcc的3.4版本，因为linux-0.11不能在gcc 4.x下编译。 在Fedora下，用下列命令安装：

\`\`\`
$sudo yum install compat-gcc-34 glibc-devel libgcc
\`\`\`

如果没有sudo权限，则运行

\`\`\`
$su -c "yum install compat-gcc-34 glibc-devel libgcc"
\`\`\`

以下命令类似，如果不能sudo则su。su命令需要root密码，（应该）是在安装Fedora的时候指定的。

如果是64位系统，那么应该指定安装32位的库。 在64位Fedora下运行如下命令来安装gcc 3.4

\`\`\`
$sudo yum install compat-gcc-34 glibc-devel.i686 libgcc.i686
\`\`\`

安装完成之后再以普通用户身份运行

\`\`\`
$ln -s /usr/bin/gcc34 ~/bin/gcc-3.4
\`\`\`

然后是其他必备工具

\`\`\`
$sudo yum install dev86
\`\`\`

还有一些必要的库，

如果是32位系统

\`\`\`
$sudo yum install libSM libX11 libXpm libstdc++ ncurses-libs expat
\`\`\`

如果是64位的系统

\`\`\`
$sudo yum install libSM.i686 libX11.i686 libXpm.i686 libstdc++.i686 ncurses-libs.i686 expat.i686
\`\`\`

即使安装了这些软件包，实验时还是有可能出现找不到某些lib的情况。

遇到这种情况请先读错误输出，从中找出缺少的库（一般都是libxxx.so.xxx），然后尝试

输入yum search 缺少库的名字( 例如libXpm则输入Xpm）

1. Google “fedora libxxx”
2. 到cms的论坛上发帖求助
3. 这三种方法来找到所需的软件包并安装上。

另外，在Fedora与linux-0.11交换文件时，可能需要暂时关闭SElinux，否则SElinux会阻止用户的某些磁盘写入操作。

### 使用方法

### 准备活动

\`\`\`
$ cd ~/oslab
\`\`\`

把当前目录切换到oslab下，用pwd命令确认，用“ls -l”列目录内容。本实验的所有内容都在本目录或其下级目录内完成。

### 编译内核

“编译内核”比“编写内核”要简单得多。首先要进入linux-0.11目录，然后执行：

\`\`\`
$ make all
\`\`\`

因为“all”是最常用的参数，所以可以省略，只用“make”，效果一样。

在多处理器的系统上，可以用-j参数进行并行编译，加快速度。例如双CPU的系统可以：

\`\`\`
$ make -j 2
\`\`\`

make命令会显示很多很多很多的信息，你可以尽量去看懂，也可以装作没看见。只要最后几行中没有“error”就说明编译成功。最后生成的目标文件是一个软盘镜像文件——linux-0.11/Image。如果将此镜像文件写到一张1.44MB的软盘上，就可以启动一台真正的计算机。

linux-0.11目录下是全部的源代码，很多实验内容都是要靠修改这些代码来完成。修改后需要重新编译内核，还是执行命令：

\`\`\`
$ make all
\`\`\`

make命令会自动跳过未被修改的文件，链接时直接使用上次编译生成的目标文件，从而节约编译时间。但如果重新编译后，你的修改貌似没有生效，可以试试先“make clean”，再“make all”。“make clean”是删除上一次编译生成的所有中间文件和目标文件，确保是在全新的状态下编译整个工程。

### 运行和调试

在Bochs中运行最新编译好的内核很简单，在oslab目录下执行：

\`\`\`
$ ./run
\`\`\`

如果出现Bochs的窗口，里面显示linux的引导过程，最后停止在“[/usr/root/]#”，表示运行成功。

内核调试分为两种模式：汇编级调试和C语言级调试。

汇编级调试需要执行命令：

\`\`\`
$ ./dbg-asm
\`\`\`

可以用命令help来查看调试系统用的基本命令。更详细的信息请查阅Bochs使用手册。

C语言级调试稍微复杂一些。首先执行如下命令：

\`\`\`
$ ./dbg-c
\`\`\`

然后再打开一个终端窗口，进入oslab目录后，执行：

\`\`\`
$ ./rungdb
\`\`\`

新终端窗口中运行的是GDB调试器。关于gdb调试器请查阅GDB使用手册。

### Ubuntu和Linux 0.11之间的文件交换

oslab下的hdc-0.11-new.img是0.11内核启动后的根文件系统镜像文件，相当于在bochs虚拟机里装载的硬盘。在Ubuntu上访问其内容的方法是：

\`\`\`
$ sudo ./mount-hdc
\`\`\`

（在格物楼机房，直接用“mount hdc”代替上面命令，不需sudo。但要求oslab必须在/home/public_user/oslab或/public/oslab）

之后，hdc目录下就是和0.11内核一模一样的文件系统了，可以读写任何文件（可能有些文件要用sudo才能访问）。读写完毕，不要忘了卸载这个文件系统：

\`\`\`
$ sudo umount hdc
\`\`\`

**注意1**：不要在0.11内核运行的时候mount镜像文件，否则可能会损坏文件系统。同理，也不要在已经mount的时候运行0.11内核。

**注意2**：在关闭Bochs之前，需要先在0.11的命令行运行“sync”，确保所有缓存数据都存盘后，再关闭Bochs。

## Windows上的实验环境

（从2008年9月起，Windows版的hit-oslab停止维护和支持。使用中遇到的问题请自行解决。我们不对该版本造成的任何后果负责）

感谢flyfish，他写了一篇详细的文章介绍如何在Windows下搭建Linux 0.11的实验环境，并且给出了相应的代码。本环境大量参考和继承了他所做的工作。

### 环境搭建

首先，到“资料和文件”中下载最新版的hit-oslab-win32-XXXXXXXX.tar.gz。这个文件包中包括下列内容：

- 可在Windows下编译的Linux 0.11内核源代码。
- BIN86、GDB和GCC(MinGW)。
- 已打开gdb-stub功能，且不会发出signal 0的Bochs及其支撑文件、配置文件。Bochs的二进制发行版没有gdb-stub功能，不能用GDB进行C语言级的调试。而GDB和Bochs协同进行远程调试的时候，Bochs会发出大量的signal 0，影响调试。根据roy_hu在http://www.oldlinux.org/oldlinux/viewthread.php?tid=10761所述，我们给Bochs打了一个补丁，解决了此问题。
- 硬盘镜像文件hdc-0.11-new.img。它是Linux 0.11的根文件系统，内含gcc、vi等开发工具和bash等常用工具。
- 软盘镜像文件fdb.img。用来在Windows和Linux 0.11之间交换文件。
- filedisk，在Windows上将fdb.img虚拟成为一个可直接访问的磁盘。
- 方便运行、调试的一系列批处理文件。
- 将oslab解压后，进入oslab文件夹，可以看到文件夹下已经包括Linux-0.11源代码、Bochs、MinGW和一些数据文件及批处理文件。

为了能在Windows NT/2000/2003/XP和虚拟机中运行的Linux 0.11之间交换文件，需要安装filedisk。首先先进入filedisk文件夹，然后双击“setup”安装filedisk，最后根据提示重新启动系统。

Windows Vista以上用户不需做上一步。因为filedisk不支持Vista。Vista用户可以自行下载、安装商业软件WinImage(http://www.winimage.com/)

重启完毕，只需再安装一个你喜欢的编辑器或IDE，例如：UltraEdit、EditPlus等。请自行选择、下载、安装。

至此，环境搭建完毕。

### 使用方法

### 编译内核

“编译内核”比“编写内核”要简单得多，只需双击“make all”。它运行的时候会显示很多很多很多的信息，你可以尽量去看懂，也可以装作没看见。只要最后几行中没有“error”就说明编译成功。最后生成的目标文件是一个软盘镜像文件——linux-0.11\\Image。如果将此镜像文件写到一张1.44MB的软盘上，它就可以用来启动一台真正的计算机。

linux-0.11目录下是全部的源代码，很多实验内容都是要靠修改这些代码来完成。修改后需要重新编译内核，这时最好先双击“clean”，它会删除上一次编译生成的所有中间文件和目标文件，然后再“make all”。

每次编译之前都做一次clean可以避免一些不必要的麻烦，但会增大编译时间。怎么做合适，就要靠经验决定了。

### 运行和调试

在Bochs中运行最新编译好的内核很简单，在oslab文件夹下双击“run”

如果出现Bochs的窗口，里面显示linux的引导过程，最后停止在“[/usr/root/]#”，表示运行成功。

内核调试分为两种模式：汇编级调试和C语言级调试。

汇编级调试需要运行“dbg-asm”。在Console窗口中可以用命令help来查看调试系统用的基本命令。更详细的信息请查阅Bochs使用手册。

C语言级调试稍微复杂一点点。

首先运行“dbg-c”。它会打开网络端口1234，所以如果安装了防火墙一类的软件，会弹出提示，一定要允许这个端口被访问。

然后运行“rungdb”，打开的命令行窗口中运行的就是GDB调试器。关于GDB调试器请查阅GDB使用手册。

### Windows和Linux 0.11之间的文件交换

oslab下的fdb.img是一个1.44MB软盘镜像文件，Bochs启动时会自动挂载到b:。

在Windows NT/2000/2003/XP上我们通过filedisk的虚拟磁盘访问这个文件的内容，它是一款自由软件，免费且开放源代码。不过，它不支持Windows Vista，所以在Windows Vista下只能使用WinImage，它可以直接打开img文件，就像打开一个压缩包一样。但它是商业软件，只有30天的免费试用期。出于版权的考虑，我们没有在实验环境中包含它。

如果使用filedisk，只需双击“mount”，系统会出现一个磁盘“X:”（就像插入一个U盘一样），这个磁盘就是fdb.img的虚拟磁盘，可以在其上读写任何文件。读写完毕，不要忘了双击“umount”，卸载这个文件系统。

在Linux 0.11环境里，输入命令：

\`\`\`
# mcopy hello.c b:
\`\`\`

可以将文件hello.c写入文件fdb.img中。而命令：

\`\`\`
# mcopy b:hello.c .
\`\`\`

则是从fdb.img拷贝到当前目录。其中mcopy来自Linux/UNIX读写MSDOS文件的一个工具mtools。

如果使用上述命令出现“Reset-floppy called”的错误，那么首先执行一次“mdir a:”，再执行一次“mdir b:”，然后就可以mcopy了。

要特别注意的是，当Bochs运行的时候不能mount，而未umount的时候，Bochs不能访问这个镜像文件。

另外，在关闭Bochs之前，需要先在0.11的命令行运行“sync”，确保所有缓存数据都存盘后，再关闭Bochs。

## FAQ

Q: 为何有时Bochs的光标闪动，却不响应我的输入？

A: 按一下Alt，然后再试试。 如果你习惯用Alt+Tab切换窗口，就肯定会遇到这个问题。原因是在Bochs窗口按下Alt，Bochs会接收到Alt按下的事件，然后将此事件传给Linux 0.11。待再按下Tab时，主机操作系统经判断认定这是一个切换窗口的快捷键，于是直接切换窗口，Tab和Alt抬起的事件都不会再发给Bochs。等切换会Bochs，Linux 0.11此时还处于认为Alt已按下的状态，再按任何按键都被解释成是和Alt组合的按键，所以就“好像”不响应了（按数字键可以看到它的响应）。

Q: 怎样加快make clean、make all的速度？

A: 如果只修改了kernel目录下的文件，删除kernel目录下的kernel.o，然后直接make就行了。其它目录方法类似。

Q: Bochs屏幕乱了怎么办？

A: 这是Linux的终端控制和Bochs虚拟的终端之间配合不好导致的，一般在大量输出信息后，会出现混乱，甚至很像死机。此时按ctrl+l可以缓解一下。最好是用输出重定向功能将输出都重定向到一个文件，然后用vi看。`
  }, {
    id: '1',
    content: `# 1. 熟悉实验环境

   ## 实验目的

   - 熟悉hit-oslab实验环境；
   - 建立对操作系统引导过程的深入认识；
   - 掌握操作系统的基本开发过程；
   - 能对操作系统代码进行简单的控制，揭开操作系统的神秘面纱。

   ## 实验内容

   此次实验的基本内容是：

   1. 阅读《Linux内核完全注释》的第6章，对计算机和Linux 0.11的引导过程进行初步的了解；
   2. 按照下面的要求改写0.11的引导程序bootsect.s
   3. 有兴趣同学可以做做进入保护模式前的设置程序setup.s。

   改写bootsect.s主要完成如下功能：

   1. bootsect.s能在屏幕上打印一段提示信息“XXX is booting...”，其中XXX是你给自己的操作系统起的名字，例如LZJos、Sunix等（可以上论坛上秀秀谁的OS名字最帅，也可以显示一个特色logo，以表示自己操作系统的与众不同。）

   改写setup.s主要完成如下功能：

   1. bootsect.s能完成setup.s的载入，并跳转到setup.s开始地址执行。而setup.s向屏幕输出一行"Now we are in SETUP"。
   2. setup.s能获取至少一个基本的硬件参数（如内存参数、显卡参数、硬盘参数等），将其存放在内存的特定地址，并输出到屏幕上。
   3. setup.s不再加载Linux内核，保持上述信息显示在屏幕上即可。

   ## 实验报告

   在实验报告中回答如下问题：

   1. 有时，继承传统意味着别手蹩脚。x86计算机为了向下兼容，导致启动过程比较复杂。请找出x86计算机启动过程中，被硬件强制，软件必须遵守的两个“多此一举”的步骤（多找几个也无妨），说说它们为什么多此一举，并设计更简洁的替代方案。 评分标准[编辑]
   2. bootsect显示正确，30%
   3. bootsect正确读入setup，10%
   4. setup获取硬件参数正确，20%
   5. setup正确显示硬件参数，20%
   6. 实验报告，20%

   ## 实验提示

   操作系统的boot代码有很多，并且大部分是相似的。本实验仿照Linux-0.11/boot目录下的bootsect.s和setup.s，以剪裁它们为主线。当然，如果能完全从头编写，并实现实验所要求的功能，是再好不过了。

   同济大学赵炯博士的《Linux内核0.11完全注释（修正版V3.0）》（以后简称《注释》）的第6章是非常有帮助的参考，实验中可能遇到的各种问题，几乎都能找到答案。可以在“资料和文件下载”中下载到该书的电子版。同目录中，校友谢煜波撰写的《操作系统引导探究》也是一份很好的参考。

   需要注意的是，oslab中的汇编代码使用as86编译，语法和汇编课上所授稍有不同。

   下面将给出一些更具体的“提示”。这些提示并不是实验的一步一步的指导，而是罗列了一些实验中可能遇到的困难，并给予相关提示。它们肯定不会涵盖所有问题，也不保证其中的每个字都对完成实验有帮助。所以，它们更适合在你遇到问题时查阅，而不是当作指南一样地亦步亦趋。本书所有实验的提示都是秉承这个思想编写的。

   ## Linux 0.11相关代码详解

   boot/bootsect.s、boot/setup.s和tools/build.c是本实验会涉及到的源文件。它们的功能详见《注释》的6.2、6.3节和16章。

   如果使用Windows下的环境，那么要注意Windows环境里提供的build.c是一个经过修改过的版本。Linus Torvalds的原版是将0.11内核的最终目标代码输出到标准输出，由make程序将数据重定向到Image文件，这在Linux、Unix和Minix等系统下都是非常有效的。但Windows本身的缺陷（也许是特色）决定了在Windows下不能这么做，所以flyfish修改了build.c，将输出直接写入到Image（flyfish是写入到Boot.img文件，我们为了两个环境的一致，也为了最大化地与原始版本保持统一，将其改为Image）文件中。同时为了适应Windows的一些特殊情况，他还做了其它一些小修改。

   ### 引导程序的运行环境

   引导程序由BIOS加载并运行。它活动时，操作系统还不存在，整台计算机的所有资源都由它掌控，而能利用的功能只有BIOS中断调用。

   ### 完成bootsect.s的屏幕输出功能

   首先来看完成屏幕显示的关键代码如下：

   \`\`\`
           ! 首先读入光标位置
           mov    ah,#0x03
           xor    bh,bh
           int    0x10

           ! 显示字符串“LZJos is running...”
           mov    cx,#25            ! 要显示的字符串长度
           mov    bx,#0x0007        ! page 0, attribute 7 (normal)
           mov    bp,#msg1
           mov    ax,#0x1301        ! write string, move cursor
           int    0x10

       inf_loop:
           jmp    inf_loop        ! 后面都不是正经代码了，得往回跳呀
           ! msg1处放置字符串

       msg1:
           .byte 13,10            ! 换行+回车
           .ascii "LZJos is running..."
           .byte 13,10,13,10            ! 两对换行+回车
           !设置引导扇区标记0xAA55
           .org 510
       boot_flag:
           .word 0xAA55            ! 必须有它，才能引导
   \`\`\`

   接下来，将完成屏幕显示的代码在开发环境中编译，并使用linux-0.11/tools/build.c将编译后的目标文件做成Image文件。

   ### 编译和运行

   Ubuntu上先从终端进入~/oslab/linux-0.11/boot/目录。Windows上则先双击快捷方式“MinGW32.bat”，将打开一个命令行窗口，当前目录是oslab，用cd命令进入linux-0.11\\boot。无论那种系统，都执行下面两个命令编译和链接bootsect.s：

   \`\`\`
       as86 -0 -a -o bootsect.o bootsect.s
       ld86 -0 -s -o bootsect bootsect.o
   \`\`\`

   其中-0（注意：这是数字0，不是字母O）表示生成8086的16位目标程序，-a表示生成与GNU as和ld部分兼容的代码，-s告诉链接器ld86去除最后生成的可执行文件中的符号信息。

   如果这两个命令没有任何输出，说明编译与链接都通过了。Ubuntu下用ls -l可列出下面的信息：

   \`\`\`
       -rw--x--x    1  root  root  544  Jul  25  15:07   bootsect
       -rw------    1  root  root  257  Jul  25  15:07   bootsect.o
       -rw------    1  root  root  686  Jul  25  14:28   bootsect.s
   \`\`\`

   Windows下用dir可列出下面的信息：

   \`\`\`
       2008-07-28  20:14               544 bootsect
       2008-07-28  20:14               924 bootsect.o
       2008-07-26  20:13             5,059 bootsect.s
   \`\`\`

   其中bootsect.o是中间文件。bootsect是编译、链接后的目标文件。

   需要留意的文件是bootsect的文件大小是544字节，而引导程序必须要正好占用一个磁盘扇区，即512个字节。造成多了32个字节的原因是ld86产生的是Minix可执行文件格式，这样的可执行文件处理文本段、数据段等部分以外，还包括一个Minix可执行文件头部，它的结构如下：

   \`\`\`
       struct exec {
           unsigned char a_magic[2];  //执行文件魔数
           unsigned char a_flags;
           unsigned char a_cpu;       //CPU标识号
           unsigned char a_hdrlen;    //头部长度，32字节或48字节
           unsigned char a_unused;
           unsigned short a_version;
           long a_text; long a_data; long a_bss; //代码段长度、数据段长度、堆长度
           long a_entry;    //执行入口地址
           long a_total;    //分配的内存总量
           long a_syms;     //符号表大小
       };
   \`\`\`

   算一算：6 char(6字节)+1 short(2字节)+6 long(24字节)=32，正好是32个字节，去掉这32个字节后就可以放入引导扇区了（这是tools/build.c的用途之一）。

   对于上面的Minix可执行文件，其a_magic[0]=0x01，a_magic[1]=0x03，a_flags=0x10（可执行文件），a_cpu=0x04（表示Intel i8086/8088，如果是0x17则表示Sun公司的SPARC），所以bootsect文件的头几个字节应该是01 03 10 04。为了验证一下，Ubuntu下用命令“hexdump -C bootsect”可以看到：

   \`\`\`
       00000000  01 03 10 04 20 00 00 00  00 02 00 00 00 00 00 00  |.... ...........|
       00000010  00 00 00 00 00 00 00 00  00 82 00 00 00 00 00 00  |................|
       00000020  b8 c0 07 8e d8 8e c0 b4  03 30 ff cd 10 b9 17 00  |.........0......|
       00000030  bb 07 00 bd 3f 00 b8 01  13 cd 10 b8 00 90 8e c0  |....?...........|
       00000040  ba 00 00 b9 02 00 bb 00  02 b8 04 02 cd 13 73 0a  |..............s.|
       00000050  ba 00 00 b8 00 00 cd 13  eb e1 ea 00 00 20 90 0d  |............. ..|
       00000060  0a 53 75 6e 69 78 20 69  73 20 72 75 6e 6e 69 6e  |.Sunix is runnin|
       00000070  67 21 0d 0a 0d 0a 00 00  00 00 00 00 00 00 00 00  |g!..............|
       00000080  00 00 00 00 00 00 00 00  00 00 00 00 00 00 00 00  |................|
       *
       00000210  00 00 00 00 00 00 00 00  00 00 00 00 00 00 55 aa  |..............U.|
       00000220
   \`\`\`

   Windows下用UltraEdit把该文件打开，果然如此。

   ![图1 用UltraEdit打开文件bootsect](https://hoverwinter.gitbooks.io/hit-oslab-manual/content/assets/bootsect.bmp)

   图1 用UltraEdit打开文件bootsect

   接下来干什么呢？是的，要去掉这32个字节的文件头部（tools/build.c的功能之一就是这个）！随手编个小的文件读写程序都可以去掉它。不过，懒且聪明的人会在Ubuntu下用命令：

   \`\`\`
   $ dd bs=1 if=bootsect of=Image skip=32
   \`\`\`

   生成的Image就是去掉文件头的bootsect。

   Windows下可以用UltraEdit直接删除（选中这32个字节，然后按Ctrl+X）。

   去掉这32个字节后，将生成的文件拷贝到linux-0.11目录下，并一定要命名为“Image”（注意大小写）。然后就“run”吧！

   ![图2 bootsect引导后的系统启动情况](https://hoverwinter.gitbooks.io/hit-oslab-manual/content/assets/boot_run.bmp)

   图2 bootsect引导后的系统启动情况

   ### bootsect.s读入setup.s

   首先编写一个setup.s，该setup.s可以就直接拷贝前面的bootsect.s（可能还需要简单的调整），然后将其中的显示的信息改为：“Now we are in SETUP”。

   接下来需要编写bootsect.s中载入setup.s的关键代码。原版bootsect.s中下面的代码就是做这个的。

   \`\`\`
       load_setup:
           mov    dx,#0x0000        !设置驱动器和磁头(drive 0, head 0): 软盘0磁头
           mov    cx,#0x0002        !设置扇区号和磁道(sector 2, track 0):0磁头、0磁道、2扇区
           mov    bx,#0x0200        !设置读入的内存地址：BOOTSEG+address = 512，偏移512字节
           mov    ax,#0x0200+SETUPLEN    !设置读入的扇区个数(service 2, nr of sectors)，
                           !SETUPLEN是读入的扇区个数，Linux 0.11设置的是4，
                           !我们不需要那么多，我们设置为2
           int    0x13            !应用0x13号BIOS中断读入2个setup.s扇区
           jnc    ok_load_setup        !读入成功，跳转到ok_load_setup: ok - continue
           mov    dx,#0x0000         !软驱、软盘有问题才会执行到这里。我们的镜像文件比它们可靠多了
           mov    ax,#0x0000        !否则复位软驱 reset the diskette
           int    0x13
           jmp    load_setup          !重新循环，再次尝试读取
       ok_load_setup:
           ！接下来要干什么？当然是跳到setup执行。
   \`\`\`

   所有需要的功能在原版bootsect.s中都是存在的，我们要做的仅仅是删除那些对我们无用的代码。

   ### 再次编译

   现在有两个文件都要编译、链接。一个个手工编译，效率低下，所以借助Makefile是最佳方式。

   在Ubuntu下，进入linux-0.11目录后，使用下面命令（注意大小写）：

   \`\`\`
   $ make BootImage
   \`\`\`

   Windows下，在命令行方式，进入Linux-0.11目录后，使用同样的命令（不需注意大小写）：

   \`\`\`
   make BootImage
   \`\`\`

   无论哪种系统，都会看到：

   \`\`\`
       Unable to open 'system'
       make: *** [BootImage] Error 1
   \`\`\`

   有Error！这是因为make根据Makefile的指引执行了tools/build.c，它是为生成整个内核的镜像文件而设计的，没考虑我们只需要bootsect.s和setup.s的情况。它在向我们要“系统”的核心代码。为完成实验，接下来给它打个小补丁。

   修改build.c

   build.c从命令行参数得到bootsect、setup和system内核的文件名，将三者做简单的整理后一起写入Image。其中system是第三个参数（argv[3]）。当“make all”或者“makeall”的时候，这个参数传过来的是正确的文件名，build.c会打开它，将内容写入Image。而“make BootImage”时，传过来的是字符串"none"。所以，改造build.c的思路就是当argv[3]是"none"的时候，只写bootsect和setup，忽略所有与system有关的工作，或者在该写system的位置都写上“0”。

   修改工作主要集中在build.c的尾部，请斟酌。

   当按照前一节所讲的编译方法编译成功后，run，就得到了如图3所示的运行结果，和我们想得到的结果完全一样。

   ![图3 用修改后的bootsect.s和setup.s进行引导的结果](https://hoverwinter.gitbooks.io/hit-oslab-manual/content/assets/boot.bmp)

   图3 用修改后的bootsect.s和setup.s进行引导的结果

   ### setup.s获取基本硬件参数

   setup.s将获得硬件参数放在内存的0x90000处。原版setup.s中已经完成了光标位置、内存大小、显存大小、显卡参数、第一和第二硬盘参数的保存。

   用ah=#0x03调用0x10中断可以读出光标的位置，用ah=#0x88调用0x15中断可以读出内存的大小。有些硬件参数的获取要稍微复杂一些，如磁盘参数表。在PC机中BIOS设定的中断向量表中int 0x41的中断向量位置(4*0x41 = 0x0000:0x0104)存放的并不是中断程序的地址，而是第一个硬盘的基本参数表。第二个硬盘的基本参数表入口地址存于int 0x46中断向量位置处。每个硬盘参数表有16个字节大小。下表给出了硬盘基本参数表的内容：

   表1 磁盘基本参数表

   | 位移 | 大小 | 说明         |
   | :--- | :--- | :----------- |
   | 0x00 | 字   | 柱面数       |
   | 0x02 | 字节 | 磁头数       |
   | …    | …    | …            |
   | 0x0E | 字节 | 每磁道扇区数 |
   | 0x0F | 字节 | 保留         |

   所以获得磁盘参数的方法就是复制数据。

   下面是将硬件参数取出来放在内存0x90000的关键代码。

   \`\`\`
       mov    ax,#INITSEG
       mov    ds,ax !设置ds=0x9000
       mov    ah,#0x03    !读入光标位置
       xor    bh,bh
       int    0x10        !调用0x10中断
       mov    [0],dx        !将光标位置写入0x90000.

       !读入内存大小位置
       mov    ah,#0x88
       int    0x15
       mov    [2],ax

       !从0x41处拷贝16个字节（磁盘参数表）
       mov    ax,#0x0000
       mov    ds,ax
       lds    si,[4*0x41]
       mov    ax,#INITSEG
       mov    es,ax
       mov    di,#0x0004
       mov    cx,#0x10
       rep            !重复16次
       movsb
   \`\`\`

   现在已经将硬件参数（只包括光标位置、内存大小和硬盘参数，其他硬件参数取出的方法基本相同，此处略去）取出来放在了0x90000处，接下来的工作是将这些参数显示在屏幕上。这些参数都是一些无符号整数，所以需要做的主要工作是用汇编程序在屏幕上将这些整数显示出来。

   以十六进制方式显示比较简单。这是因为十六进制与二进制有很好的对应关系（每4位二进制数和1位十六进制数存在一一对应关系），显示时只需将原二进制数每4位划成一组，按组求对应的ASCII码送显示器即可。ASCII码与十六进制数字的对应关系为：0x30～0x39对应数字0～9，0x41～0x46对应数字a～f。从数字9到a，其ASCII码间隔了7h，这一点在转换时要特别注意。为使一个十六进制数能按高位到低位依次显示，实际编程中，需对bx中的数每次循环左移一组（4位二进制），然后屏蔽掉当前高12位，对当前余下的4位（即1位十六进制数）求其ASCII码，要判断它是0～9还是a～f，是前者则加0x30得对应的ASCII码，后者则要加0x37才行，最后送显示器输出。以上步骤重复4次，就可以完成bx中数以4位十六进制的形式显示出来。

   下面是完成显示16进制数的汇编语言程序的关键代码，其中用到的BIOS中断为INT 0x10，功能号0x0E（显示一个字符），即AH=0x0E，AL=要显示字符的ASCII码。

   \`\`\`
       !以16进制方式打印栈顶的16位数
       print_hex:
           mov    cx,#4         ! 4个十六进制数字
           mov    dx,(bp)     ! 将(bp)所指的值放入dx中，如果bp是指向栈顶的话
       print_digit:
           rol    dx,#4        ! 循环以使低4比特用上 !! 取dx的高4比特移到低4比特处。
           mov    ax,#0xe0f     ! ah = 请求的功能值，al = 半字节(4个比特)掩码。
           and    al,dl         ! 取dl的低4比特值。
           add    al,#0x30     ! 给al数字加上十六进制0x30
           cmp    al,#0x3a
           jl    outp          !是一个不大于十的数字
           add    al,#0x07      !是a～f，要多加7
       outp:
           int    0x10
           loop    print_digit
           ret
   \`\`\`

   这里用到了一个loop指令，每次执行loop指令，cx减1，然后判断cx是否等于0。如果不为0则转移到loop指令后的标号处，实现循环；如果为0顺序执行。另外还有一个非常相似的指令：rep指令，每次执行rep指令，cx减1，然后判断cx是否等于0，如果不为0则继续执行rep指令后的串操作指令，直到cx为0，实现重复。

   \`\`\`
       !打印回车换行
       print_nl:
           mov    ax,#0xe0d     ! CR
           int    0x10
           mov    al,#0xa     ! LF
           int    0x10
           ret
   \`\`\`

   只要在适当的位置调用print_bx和print_nl（注意，一定要设置好栈，才能进行函数调用）就能将获得硬件参数打印到屏幕上，完成此次实验的任务。但事情往往并不总是顺利的，前面的两个实验大多数实验者可能一次就编译调试通过了（这里要提醒大家：编写操作系统的代码一定要认真，因为要调试操作系统并不是一件很方便的事）。但在这个实验中会出现运行结果不对的情况（为什么呢？因为我们给的代码并不是100%好用的）。所以接下来要复习一下汇编，并阅读《Bochs使用手册》，学学在Bochs中如何调试操作系统代码。

   我想经过漫长而痛苦的调试后，大家一定能兴奋地得到下面的运行结果：

   ![图4 用可以打印硬件参数的setup.s进行引导的结果](https://hoverwinter.gitbooks.io/hit-oslab-manual/content/assets/hd_figures.bmp)

   图4 用可以打印硬件参数的setup.s进行引导的结果

   Memory Size是0x3C00KB，算一算刚好是15MB（扩展内存），加上1MB正好是16MB，看看Bochs配置文件bochs/bochsrc.bxrc：

   \`\`\`
   ……
   megs: 16
   ……
   ata0-master: type=disk, mode=flat, cylinders=410, heads=16, spt=38
   ……
   \`\`\`

   这些都和上面打出的参数吻合，表示此次实验是成功的。`
  }],
  // 实验报告演示
  reports: [{
    id: '0',
    content: `test`
  },
  {
    id: '1',
    content: `# 操作系统的引导实验

> 实验日期-：2022年3月11日
>
> 班级： 软嵌202
>
> 姓名： 汪星聚
>
> 学号： 2030110778

## 1. 实验目的

- 熟悉 \`hit-oslab\` 实验环境；
- 建立对操作系统引导过程的深入认识；
- 掌握操作系统的基本开发过程；
- 能对操作系统代码进行简单的控制，揭开操作系统的神秘面纱

## 2. 实验内容

此次实验的基本内容是：

1. 阅读《Linux 内核完全注释》的第 6 章，对计算机和 Linux 0.11 的引导过程进行初步的了解；
2. 按照下面的要求改写 0.11 的引导程序 \`bootsect.s\`
3. 有兴趣同学可以做做进入保护模式前的设置程序 \`setup.s\`

## 3. 实验步骤

### 3.1 bootsect.s 的屏幕输出功能

1. 修改\`bootsect.s\`文件

   \`\`\`
   entry _start
   _start:
       mov ah,#0x03
       xor bh,bh
       int 0x10
       mov cx,#27
       mov bx,#0x0007
       mov bp,#msg1
       mov ax,#0x07c0
       mov es,ax
       mov ax,#0x1301
       int 0x10
   inf_loop:
       jmp inf_loop
   msg1:
       .byte   13,10
       .ascii  "Hello, my name is WXJ"
       .byte   13,10,13,10
   .org 508
   boot_flag:
       .word   0xAA55
   \`\`\`

2. 重新编译链接

   \`\`\`shell
   as86 -0 -a -o bootsect.o bootsect.s
   ld86 -0 -s -o bootsect bootsect.o
   \`\`\`

3. 清除头部32字节

   \`\`\`shell
   dd bs=1 if=bootsect of=Image skip=32
   \`\`\`

4. 拷贝到\`~/oslab/linux-0.11\`并重命名为\`Image\`

5. 运行测试

   ![image-20220307131320907](https://snz04pap001files.storage.live.com/y4m9Y-LmHqUqjM05cqonGS37xhmAxS_po7BfKR7Bo2wRGBG0DV4_GxsPWfOjfFWkApf4ozzty1h6cxScd9rXHv7EI_JBAGvymPJHv4ntK--LowWlY2SG-08_H6J5ea8D2on9BV_d8nMMYHSmMg4UJzodpy2NAoF1k-c0yZewjIVYrKjrMZg5jjTstrKH7ItBvha?width=1522&height=1238&cropmode=none)

### 3.2 bootsect.s 读入 setup.s

1. 修改\`setup.s\`

   \`\`\`
   .globl begtext, begdata, begbss, endtext, enddata, endbss
   .text
   begtext:
   .data
   begdata:
   .bss
   begbss:
   .text

   BOOTSEG  = 0x07c0           ! original address of boot-sector
   INITSEG  = 0x9000           ! we move boot here - out of the way
   SETUPSEG = 0x9020           ! setup starts here

   entry _start
   _start:

   !设置cs=ds=es
       mov ax,cs
       mov ds,ax
       mov es,ax

       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10

       mov cx,#28
       mov bx,#0x000c      ! page 0, attribute c
       mov bp,#msg1
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   !死循环
   l:  jmp l

   msg1:
       .byte 13,10
       .ascii "Now we are in setup..."
       .byte 13,10,13,10

   .text
   endtext:
   .data
   enddata:
   .bss
   endbss:

   \`\`\`

2. 修改\`build.c\`，忽略所有与 system 有关的工作

   ![image-20220307135313860](https://snz04pap001files.storage.live.com/y4m2AuCK7BW-M8fENr9a15rlT_r7D3ns-PDC7ilxNfSlmtw7w8JUl4ntTHfT5NfX7ptOrB8cisxP6l-RzO24Da2nU0S4wFyw0K0xgMnYi6Tyj9wBW0TyYrWDO9jyWbiUIsW86sqMrInf8JmxH7mXi7_HCHxzEDUfrYCnRLOLudoLiPUgVSLEergwow2Nz7zSYt1?width=540&height=266&cropmode=none)

3. 重新生成镜像

   \`\`\`shell
   make BootImage
   \`\`\`

4. 运行测试

   ![image-20220307135611846](https://snz04pap001files.storage.live.com/y4m-brO16RuCOyP44BeAAZn00hUFc-h8hFCqFU4nAHYKK4EfPZMdfpGtTjPuoGhYvEII5CTG_EnkGG-pIpm_7Ar_460slrDDgkD9CjCESdI25N7fo-JtdclbylYLyRL7GNLhJ8gtWQ2ui_kU32-Vn7cywHqine6wB03bA1HIE-Fh2kFOjsO_gtpBA4Z5h9ZeWrv?width=1521&height=1236&cropmode=none)

### 3.3 显示其他信息

1. 重新修改\`setup.s\`

   \`\`\`
   .globl begtext, begdata, begbss, endtext, enddata, endbss
   .text
   begtext:
   .data
   begdata:
   .bss
   begbss:
   .text

   BOOTSEG  = 0x07c0           ! original address of boot-sector
   INITSEG  = 0x9000           ! we move boot here - out of the way
   SETUPSEG = 0x9020           ! setup starts here

   entry _start
   _start:

   !设置cs=ds=es
       mov ax,cs
       mov ds,ax
       mov es,ax

       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10

       mov cx,#28
       mov bx,#0x000c      ! page 0, attribute c
       mov bp,#msg1
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   ! ok, the read went well so we get current cursor position and save it for
   ! posterity.
   ! 获取光标位置 =>  0x9000:0
       mov ax,#INITSEG ! this is done in bootsect already, but...
       mov ds,ax
       mov ah,#0x03    ! read cursor pos
       xor bh,bh
       int 0x10        ! save it in known place, con_init fetches
       mov [0],dx      ! it from 0x90000.

   ! Get memory size (extended mem, kB)
   ! 获取拓展内存大小 => 0x9000:2
       mov ah,#0x88
       int 0x15
       mov [2],ax

   ! Get hd0 data
   ! 获取硬盘参数 => 0x9000:80  大小：16B
       mov ax,#0x0000
       mov ds,ax
       lds si,[4*0x41]
       mov ax,#INITSEG
       mov es,ax
       mov di,#0x0080
       mov cx,#0x10
       rep
       movsb

   ! 前面修改了ds寄存器，这里将其设置为0x9000
       mov ax,#INITSEG
       mov ds,ax
       mov ax,#SETUPSEG
       mov es,ax

   !显示 Cursor POS: 字符串
       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10
       mov cx,#11
       mov bx,#0x0007      ! page 0, attribute c
       mov bp,#cur
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   !调用 print_hex 显示具体信息
       mov ax,[0]
       call print_hex
       call print_nl

   !显示 Memory SIZE: 字符串
       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10
       mov cx,#12
       mov bx,#0x0007      ! page 0, attribute c
       mov bp,#mem
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   !显示 具体信息
       mov ax,[2]
       call print_hex

   !显示相应 提示信息
       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10
       mov cx,#25
       mov bx,#0x0007      ! page 0, attribute c
       mov bp,#cyl
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   !显示具体信息
       mov ax,[0x80]
       call print_hex
       call print_nl

   ！显示 提示信息
       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10
       mov cx,#8
       mov bx,#0x0007      ! page 0, attribute c
       mov bp,#head
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   ！显示 具体信息
       mov ax,[0x80+0x02]
       call print_hex
       call print_nl

   ！显示 提示信息
       mov ah,#0x03        ! read cursor pos
       xor bh,bh
       int 0x10
       mov cx,#8
       mov bx,#0x0007      ! page 0, attribute c
       mov bp,#sect
       mov ax,#0x1301      ! write string, move cursor
       int 0x10

   ！显示 具体信息
       mov ax,[0x80+0x0e]
       call print_hex
       call print_nl

   !死循环
   l:  jmp l

   !以16进制方式打印ax寄存器里的16位数
   print_hex:
       mov cx,#4   ! 4个十六进制数字
       mov dx,ax   ! 将ax所指的值放入dx中，ax作为参数传递寄存器
   print_digit:
       rol dx,#4  ! 循环以使低4比特用上 !! 取dx的高4比特移到低4比特处。
       mov ax,#0xe0f  ! ah = 请求的功能值,al = 半字节(4个比特)掩码。
       and al,dl ! 取dl的低4比特值。
       add al,#0x30  ! 给al数字加上十六进制0x30
       cmp al,#0x3a
       jl outp  !是一个不大于十的数字
       add al,#0x07  !是a~f,要多加7
   outp:
       int 0x10
       loop print_digit
       ret

   !打印回车换行
   print_nl:
       mov ax,#0xe0d
       int 0x10
       mov al,#0xa
       int 0x10
       ret

   msg1:
       .byte 13,10
       .ascii "Now we are in setup..."
       .byte 13,10,13,10
   cur:
       .ascii "Cursor POS:"
   mem:
       .ascii "Memory SIZE:"
   cyl:
       .ascii "KB"
       .byte 13,10,13,10
       .ascii "HD Info"
       .byte 13,10
       .ascii "Cylinders:"
   head:
       .ascii "Headers:"
   sect:
       .ascii "Secotrs:"

   .text
   endtext:
   .data
   enddata:
   .bss
   endbss:
   \`\`\`

2. 生成镜像

3. 运行测试

   ![image-20220307140427890](https://snz04pap001files.storage.live.com/y4mvz8TLJJx4dPCH65LgznaS2z_eeEFATEuXOhuirNaKxt8nHiiCzGNH46rJ2jFkH8w7nnyegeYnRfKi8OnwriWZ9fnwENaPIByJqiY-daebJJ8ueFohSxKcNpF7WCvWuIeqTnJmEpWJAABE51U5P-TwsSp-ZtNsFiZXppUWe6g2FhQhlMwYAz6h7NoXD0EK9Bs?width=1539&height=1167&cropmode=none)

## 4. 总结

问题：有时，继承传统意味着别手蹩脚。x86 计算机为了向下兼容，导致启动过程比较复杂。请找出 x86 计算机启动过程中，被硬件强制，软件必须遵守的两个“多此一举”的步骤（多找几个也无妨），说说它们为什么多此一举，并设计更简洁的替代方案。

> 80826，系统的地址总线由原理啊的20根发展为24根，这样能够访问呢的内存可以达到16M，但在设计80826时目标是向下兼容，也就是说在实模式下80386以及后续系列应该和8086/8088完全兼容仍然使用A20总线。所以高级芯片不得不保留实模式。
> 如果程序员访问100000H-10FFEFH之间的内存，系统将实际访问这块内存。进入实模式多此一举，可以直接进入保护模式
> 解决方案：不向下兼容直接进入32位的保护模式
`
  }]
}
