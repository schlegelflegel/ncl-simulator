("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire6312.register("7Kq8T",(function(t,a){t.exports={position:[-3.5,-1.5],components:{qx:[0,0,"existential",{variable:"X"}],qy:[4,0,"universal",{variable:"Y"}],cnf:[0,-3,"cnf",{formula:"(!X || !Y)"}],"tryout.conv":[9,1,"converter"],"satin.conv":[10,2,"converter"]},vertices:{tryin:[-2,1],"satin.and":[9,2],"satout.latch":[-2,2],"satout.latch.a":[-3,1.5],"satout.latch.b":[-3,2.5]},edges:{"tryin.loop":["tryin","tryin",2],tryin:["tryin","qx.tryin",2,"flip",{label:"try in"}],try0:["qx.tryout","qy.tryin",2,"flip"],tryout:["qy.tryout","tryout.conv",2,"flip",{label:"try out"}],"cnf.satisfied":["cnf.satisfied","satin.conv",2,"flip"],"satin.fromcnf":["satin.conv","satin.and",1,"flip"],"satin.fromtry":["tryout.conv","satin.and",1,"flip"],satin:["satin.and","qy.satin",2,"flip",{label:"satisfied in"}],sat0:["qy.satout","qx.satin",2,"flip"],satout:["qx.satout","satout.latch",2,"flip",{label:"satisfied out"}],"satout.latch.LA":["satout.latch.a","satout.latch",2],"satout.latch.LB":["satout.latch.b","satout.latch",2,"flip"],"satout.latch.AB":["satout.latch.a","satout.latch.b",2,"flip"],X:["qx.out","cnf.X","flip",{label:"X"}],"!X":["qx.inv","cnf.!X","flip",{label:"¬X"}],Y:["qy.out","cnf.Y","flip",{label:"Y"}],"!Y":["qy.inv","cnf.!Y","flip",{label:"¬Y"}]},labels:[[1.5,3.25,"Existential Quantifier"],[5.5,3.25,"Universal Quantifier"],[5.5,-3.25,"CNF formula"],[10.15,-.5,"satisfied","left"]]}}));
//# sourceMappingURL=fullschema.1f3fdb23.js.map
