#!/bin/sh -e
#
# releases the latest commit from current branch of maproom repo
#

progname=`basename $0`
if [ $# -lt 2 ]; then
   echo "usage: "
   echo "   $progname <release_dir> <repo_dir>"
   exit 1

fi

prefix="$1"
repo="$2"

export PATH=/usr/local/miconf/bin:$PATH
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

git-release-tarball maproom "$prefix" "$repo"

exit 0

