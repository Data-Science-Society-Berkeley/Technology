git add .
git commit -m "Fixed generic bug"
git push origin Update-1

ssh dssb@ssh.ocf.berkeley.edu
cd DSSWebsite/
git pull
cd ..
cp -r DSSWebsite/* public_html/
