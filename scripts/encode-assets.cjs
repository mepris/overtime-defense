// Encode delivery assets; preserve original generated PNGs and alpha channels.
const sharp=require('sharp');
const fs=require('node:fs/promises');const path=require('node:path');
(async()=>{const directory=path.resolve(__dirname,'../dist/assets');const names=(await fs.readdir(directory)).filter(n=>n.endsWith('.png')&&n!=='crew.png');let before=0,after=0;for(const name of names){const src=path.join(directory,name),out=src.replace(/\.png$/,'.webp');await sharp(src).webp({quality:84,alphaQuality:100,effort:5}).toFile(out);before+=(await fs.stat(src)).size;after+=(await fs.stat(out)).size;}console.log(JSON.stringify({images:names.length,pngBytes:before,webpBytes:after,reductionPercent:Math.round((1-after/before)*100)}));})();
