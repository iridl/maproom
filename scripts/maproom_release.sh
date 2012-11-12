#!/bin/sh -e
#
# releases the latest commit from current branch of maproom repo
#

progname=`basename $0`
if [ $# -lt 2 ]; then
   echo "usage: "
   echo "   $progname <prefix> <repo>"
   exit 1

fi


prefix="$1"
repo="$2"

lockfile="$prefix/maproom_release.lock"

export PATH=/usr/local/semantic_tools/bin:$PATH
export PATH=/usr/local/raptor-1.4.21/bin:$PATH
#export JAVA_HOME=/usr/local/jdk1.6.0_10-64  
#export PATH=$JAVA_HOME/bin:$PATH            


# one time manual setup:
#   cd to parent of $repo dir
#   git clone --recursive git@bitbucket.org:iridl/maproom.git
#   cd maproom
#   git checkout release   
#   cd $prefix
#   ln -s current/.htaccess 
#   ln -s current/uicore 
#   ln -s current/pure 
#   ln -s current/maproom 
#   crontab -e <<eos
#   5 * * * * /usr/local/bin/maproom_release.sh
#

echo "Maproom release started: `date`"

if [ ! -f "$lockfile" ]; then
   touch "$lockfile"
else 
   echo "If you would like me to proceed, please make sure there are no running '$progname \"$prefix\" ...' processes, and then remove '$lockfile'."
   exit 1;
fi

if [ ! -e "$prefix" ]; then
   echo "Creating '$prefix'..."
   install -d "$prefix"
fi

cd "$repo"

git pull
ver=`miconf/scripts/git-generate-version-info maproom tag`
if [ -h "$prefix/current" ]; then
   rver=`readlink -n "$prefix/current"`
else
   rver=""
fi

echo "ver=$ver, rver=$rver"

if [ "$ver" == "$rver" ]; then 
   echo "Maproom is up-to-date: $ver"
else
   git reset --hard
   git clean -f -d
   git submodule update --init --recursive
   make tarball

   cd "$prefix"

   tar xfz "$repo/$ver.tgz"
   if [ -h backup ]; then
      rm -rf `readlink -n backup`
      rm backup
   fi
   if [ -h current ]; then
      ln -s `readlink -n current` backup
      rm current
   fi
   ln -s "$ver" current

   echo "Maproom has been upgraded: $rver -> $ver"
fi

rm "$lockfile"

echo "Maproom release completed: `date`"
exit 0

