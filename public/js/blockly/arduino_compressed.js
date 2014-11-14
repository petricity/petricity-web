// Do not edit this file; automatically generated by build.py.
"use strict";

Blockly.Arduino=new Blockly.Generator("Arduino");Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,word,long,float,double,string,String,array,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;
Blockly.Arduino.init=function(){Blockly.Arduino.definitions_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);if(Blockly.Variables){Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_);for(var a=[],b=Blockly.Variables.allVariables(),c=0;c<b.length;c++)a[c]="int "+Blockly.Arduino.variableDB_.getName(b[c],Blockly.Variables.NAME_TYPE)+";\n";Blockly.Arduino.definitions_.variables=a.join("\n")}};
Blockly.Arduino.finish=function(a){var b=[],c=[],d;for(d in Blockly.Arduino.definitions_){var e=Blockly.Arduino.definitions_[d];e.match(/^#include/)?b.push(e):c.push(e)}e=[];for(d in Blockly.Arduino.setups_)e.push(Blockly.Arduino.setups_[d]);b.join("\n");c.join("\n");e.join("\n  ");if(""!=a)for(b=a.split("\n"),a="",c=0;c<b.length;c++)a+="  "+b[c]+"\n";return"#include <Servo.h>\n\nServo leftLeg;\nServo rightLeg;\nvoid forward() {\nleftLeg.write(80);\ndelay(250);\nrightLeg.write(40);\ndelay(250);\nleftLeg.write(110);\ndelay(250);\nrightLeg.write(60);\ndelay(250);\n}\n\nvoid backward() {\nleftLeg.write(140);\ndelay(250);\nrightLeg.write(90);\ndelay(250);\nleftLeg.write(110);\ndelay(250);\nrightLeg.write(60);\ndelay(250);\n}\n\nvoid red() {\nanalogWrite(9, 0);\nanalogWrite(10, 255);\nanalogWrite(11, 255);\n}\n\nvoid green() {\nanalogWrite(9, 255);\nanalogWrite(10, 0);\nanalogWrite(11, 255);\n}\n\nvoid blue() {\nanalogWrite(9, 255);\nanalogWrite(10, 255);\nanalogWrite(11, 0);\n}\n\nvoid setup() {\nleftLeg.attach(5);\nrightLeg.attach(6);\nleftLeg.write(110);\nrightLeg.write(40);\n}\nvoid loop() {\n"+
a+"}\n"};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){if(null===b)return"";var c="";if(!a.outputConnection||!a.outputConnection.targetConnection){var d=a.getCommentText();d&&(c+=this.prefixLines(d,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(d=a.inputList[e].connection.targetBlock())&&(d=this.allNestedComments(d))&&(c+=this.prefixLines(d,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=this.blockToCode(e);return c+b+e};Blockly.Arduino.control={};
Blockly.Arduino.controls_if=function(){for(var a=0,b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d="if ("+b+") {\n"+c+"}",a=1;a<=this.elseifCount_;a++)b=Blockly.Arduino.valueToCode(this,"IF"+a,Blockly.Arduino.ORDER_NONE)||"false",c=Blockly.Arduino.statementToCode(this,"DO"+a),d+=" else if ("+b+") {\n"+c+"}";this.elseCount_&&(c=Blockly.Arduino.statementToCode(this,"ELSE"),d+=" else {\n"+c+"}");return d};
Blockly.Arduino.controls_repeat=function(){var a=Number(this.getTitleValue("TIMES")),b=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);var c=Blockly.Arduino.variableDB_.getDistinctName("count",Blockly.Variables.NAME_TYPE);return"for ("+c+" = 0; "+c+" < "+a+"; "+c+"++) {\n"+b+"}\n"};
Blockly.Arduino.controls_whileUntil=function(){var a=Blockly.Arduino.valueToCode(this,"BOOL",Blockly.Arduino.ORDER_NONE)||"false",b=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(b=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+b);"UNTIL"==this.getTitleValue("MODE")&&(a.match(/^\w+$/)||(a="("+a+")"),a="!"+a);return"while ("+a+") {\n"+b+"}\n"};
Blockly.Arduino.controls_for=function(){var a=Blockly.Arduino.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Arduino.valueToCode(this,"FROM",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",c=Blockly.Arduino.valueToCode(this,"TO",Blockly.Arduino.ORDER_ASSIGNMENT)||"0",d=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(d=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+d);if(b.match(/^-?\d+(\.\d+)?$/)&&c.match(/^-?\d+(\.\d+)?$/))var e=
parseFloat(b)<=parseFloat(c),d="for ("+a+" = "+b+"; "+a+(e?" <= ":" >= ")+c+"; "+a+(e?"++":"--")+") {\n"+d+"}\n";else d="",e=b,b.match(/^\w+$/)||b.match(/^-?\d+(\.\d+)?$/)||(e=Blockly.Arduino.variableDB_.getDistinctName(a+"_start",Blockly.Variables.NAME_TYPE),d+="int "+e+" = "+b+";\n"),b=c,c.match(/^\w+$/)||c.match(/^-?\d+(\.\d+)?$/)||(b=Blockly.Arduino.variableDB_.getDistinctName(a+"_end",Blockly.Variables.NAME_TYPE),d+="int "+b+" = "+c+";\n"),d+="for ("+a+" = "+e+";\n    ("+e+" <= "+b+") ? "+a+
" <= "+b+" : "+a+" >= "+b+";\n    "+a+" += ("+e+" <= "+b+") ? 1 : -1) {\n"+branch0+"}\n";return d};
Blockly.Arduino.controls_forEach=function(){var a=Blockly.Arduino.variableDB_.getName(this.getTitleValue("VAR"),Blockly.Variables.NAME_TYPE),b=Blockly.Arduino.valueToCode(this,"LIST",Blockly.Arduino.ORDER_ASSIGNMENT)||"[]",c=Blockly.Arduino.statementToCode(this,"DO");Blockly.Arduino.INFINITE_LOOP_TRAP&&(c=Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,"'"+this.id+"'")+c);return"for (var "+a+" in  "+b+") {\n"+c+"}\n"};
Blockly.Arduino.controls_flow_statements=function(){switch(this.getTitleValue("FLOW")){case "BREAK":return"break;\n";case "CONTINUE":return"continue;\n"}throw"Unknown flow statement.";};Blockly.Arduino.petricity={};Blockly.Arduino.petricity_libraries=function(a){return"#include <Servo.h>\n\n"};Blockly.Arduino.petricity_main=function(a){var b=Blockly.Arduino.statementToCode(a,"setup");a=Blockly.Arduino.statementToCode(a,"loop");return"void setup() {\n"+b+"}\nvoid loop() {\n"+a+"}"};Blockly.Arduino.petricity_delay=function(a){return"delay("+parseFloat(a.getFieldValue("DELAY"))+");\n"};
Blockly.Arduino.petricity_move=function(a){return[a.getFieldValue("MOVE")+"();\n",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.petricity_color=function(a){return a.getFieldValue("COLOR")+"();\n"};