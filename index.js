const _0x4058c4=_0x4b37;(function(_0x2ad708,_0xb056a4){const _0x19cb4a=_0x4b37,_0xabfed=_0x2ad708();while(!![]){try{const _0x3765b4=-parseInt(_0x19cb4a(0x201))/0x1+-parseInt(_0x19cb4a(0x1fd))/0x2+parseInt(_0x19cb4a(0x211))/0x3*(-parseInt(_0x19cb4a(0x21a))/0x4)+-parseInt(_0x19cb4a(0x1f1))/0x5*(parseInt(_0x19cb4a(0x220))/0x6)+parseInt(_0x19cb4a(0x216))/0x7+-parseInt(_0x19cb4a(0x214))/0x8*(parseInt(_0x19cb4a(0x217))/0x9)+parseInt(_0x19cb4a(0x1fa))/0xa;if(_0x3765b4===_0xb056a4)break;else _0xabfed['push'](_0xabfed['shift']());}catch(_0x16578e){_0xabfed['push'](_0xabfed['shift']());}}}(_0x58c8,0x29bb7));function _0x4b37(_0x2868e2,_0x36e82f){const _0x58c84e=_0x58c8();return _0x4b37=function(_0x4b370,_0x19637c){_0x4b370=_0x4b370-0x1f1;let _0x169ce4=_0x58c84e[_0x4b370];return _0x169ce4;},_0x4b37(_0x2868e2,_0x36e82f);}const {Client,intents}=require(_0x4058c4(0x20c)),config=require('./config.json'),client=new Client({'intents':0x7fff});function _0x58c8(){const _0xb147bd=['startsWith','user','Berhasil\x20verify!','messageCreate','Gunakan:\x20`','member','\x20||\x20Xzanx','8516950rnEFGB','Bot','Nama\x20tersebut\x20tidak\x20diperbolehkan','102234TZMVck','Saya\x20tidak\x20dapat\x20menambahkan\x20role\x20dan\x20tidak\x20memiliki\x20permission\x20`MANAGE\x20ROLES`\x20atau\x20Role\x20saya\x20berada\x20dibawah.\x0a**Silahkan\x20naikkan\x20terlebih\x20dahulu**','channelID','Nama\x20tidak\x20dapat\x20berbentuk\x20angka','144492rABVpo','Verify','length','roleID','verify\x20<RPName>\x20(Tanpa\x20_\x20|\x202\x20Kata)`\x0aContoh:\x20`','\x20Telah\x20Online!\x0aAuthor:\x20Xzanx','toLowerCase','setActivity','add','content','prefix','discord.js','trim','actType','verify','verify\x20Samsul_Badun`','3cHhiIQ','catch','log','1896688dIufPa','includes','416325ccVHnt','9yzzjOz','ready','shift','250284kmBVep','split','guild','setNickname','reply','roles','6vyUZVu','nickTag','join','cache','Saya\x20tidak\x20dapat\x20mengganti\x20nickname\x20dan\x20tidak\x20memiliki\x20permission\x20`MANAGE\x20NICKNAMES`\x20atau\x20Role\x20saya\x20berada\x20dibawah.\x0a**Silahkan\x20naikkan\x20terlebih\x20dahulu**','1224845muTkqE','Nickname\x20terlalu\x20panjang'];_0x58c8=function(){return _0xb147bd;};return _0x58c8();}client['on'](_0x4058c4(0x218),()=>{const _0xcee2c=_0x4058c4,_0x5e1ec1=config[_0xcee2c(0x1fb)]['activity'],_0x58197b=config[_0xcee2c(0x1fb)][_0xcee2c(0x20e)];console['log'](client[_0xcee2c(0x1f4)]['username']+_0xcee2c(0x206)),client[_0xcee2c(0x1f4)][_0xcee2c(0x208)](_0x5e1ec1+_0xcee2c(0x1f9),{'type':_0x58197b});}),client['on'](_0x4058c4(0x1f6),_0x343e50=>{const _0x34e3e8=_0x4058c4,_0x79fe8d=config[_0x34e3e8(0x1fb)][_0x34e3e8(0x20b)];if(!_0x343e50[_0x34e3e8(0x20a)][_0x34e3e8(0x1f3)](_0x79fe8d)||_0x343e50['author']['bot'])return;const _0x2ead2c=_0x343e50['content']['slice'](_0x79fe8d['length'])[_0x34e3e8(0x20d)]()[_0x34e3e8(0x21b)](/ +/),_0x14ead3=_0x2ead2c[_0x34e3e8(0x219)]()['toLowerCase']();if(_0x14ead3===_0x34e3e8(0x20f)){const _0x542227=_0x2ead2c[_0x34e3e8(0x222)]('\x20'),_0x2ce358=config['Verify'][_0x34e3e8(0x204)],_0x3393d1=config[_0x34e3e8(0x202)][_0x34e3e8(0x1ff)],_0x51bc2a=config['Verify'][_0x34e3e8(0x221)],_0x24f91c=config['Verify']['nRpName'];if(_0x343e50['channel']['id']!==_0x3393d1)return _0x343e50[_0x34e3e8(0x21e)]('Kamu\x20hanya\x20dapat\x20menggunakan\x20perintah\x20ini\x20pada\x20channel\x20<#'+_0x3393d1+'>');if(!_0x2ead2c[0x0]||!_0x2ead2c[0x1])return _0x343e50['reply'](_0x34e3e8(0x1f7)+_0x79fe8d+_0x34e3e8(0x205)+_0x79fe8d+_0x34e3e8(0x210));for(i=0x0;i<_0x24f91c[_0x34e3e8(0x203)];i++){if(_0x343e50[_0x34e3e8(0x20a)][_0x34e3e8(0x207)]()[_0x34e3e8(0x215)](_0x24f91c[i]['toLowerCase']()))return _0x343e50[_0x34e3e8(0x21e)](_0x34e3e8(0x1fc));}if(!isNaN(_0x2ead2c[0x0])||!isNaN(_0x2ead2c[0x1]))return _0x343e50[_0x34e3e8(0x21e)](_0x34e3e8(0x200));if(_0x542227['length']>0x19)return _0x343e50[_0x34e3e8(0x21e)](_0x34e3e8(0x1f2));_0x343e50[_0x34e3e8(0x1f8)][_0x34e3e8(0x21d)](_0x51bc2a+'\x20'+_0x2ead2c[0x0]+'_'+_0x2ead2c[0x1])['catch'](_0x3c7489=>{const _0x38053b=_0x34e3e8;return console[_0x38053b(0x213)](_0x3c7489),_0x343e50[_0x38053b(0x21e)](_0x38053b(0x224));});const _0x220ce6=_0x343e50[_0x34e3e8(0x21c)][_0x34e3e8(0x21f)][_0x34e3e8(0x223)]['get'](_0x2ce358);_0x343e50['member']['roles'][_0x34e3e8(0x209)](_0x220ce6)[_0x34e3e8(0x212)](_0x1ecc23=>{const _0x529321=_0x34e3e8;return console[_0x529321(0x213)](_0x1ecc23),_0x343e50[_0x529321(0x21e)](_0x529321(0x1fe));}),_0x343e50['reply'](_0x34e3e8(0x1f5));}});
client.login(process.env.TOKEN);
