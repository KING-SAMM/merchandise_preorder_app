import type { MemberInformation,OrderState } from '../types';

export type MemberField = keyof MemberInformation;
export type MemberErrors = Partial<Record<MemberField,string>>;
const lettersAndHyphens=/^(?=.{1,60}$)[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
const digitsOnly=/^\d+$/;
const alphanumericOnly=/^(?=.{1,60}$)[A-Za-z0-9]+(?:[ -][A-Za-z0-9]+)*$/;
const emailPattern=/^[A-Za-z0-9]+(?:[._-][A-Za-z0-9]+)*@[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*(?:\.[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*)+$/;
const phonePattern=/^\+?\d[\d\s()-]*$/;
export const validateMemberField=(key:MemberField,value:string):string=>{const trimmed=value.trim();if(['profileName','minerId','email','phone'].includes(key)&&!trimmed)return 'This field is required.';if(!trimmed)return '';if(key==='profileName')return lettersAndHyphens.test(trimmed)?'':'Use letters and single spaces or hyphens only.';if(key==='minerId'||key==='postalCode')return digitsOnly.test(trimmed)?'':'Use digits only.';if(key==='email')return emailPattern.test(trimmed)?'':'Enter a valid email address.';if(key==='phone'){const digitCount=(trimmed.match(/\d/g)||[]).length;return phonePattern.test(trimmed)&&digitCount>=7&&digitCount<=15?'':'Enter a valid phone number.'}if(key==='country'||key=='city'||key==='stateRegion')return /^(?=.{1,60}$)[A-Za-z]+(?:[ -][A-Za-z]+)*$/.test(trimmed)?'':'Use letters and single spaces only.';return alphanumericOnly.test(trimmed)?'':'Use letters, numbers and single spaces only.'};
export const validateMember=(member:MemberInformation):MemberErrors=>Object.fromEntries(Object.entries(member).flatMap(([key,value])=>{const error=validateMemberField(key as MemberField,value);return error?[[key,error]]:[]})) as MemberErrors;
const memberLabel:Record<MemberField,string>={profileName:'Profile Name',minerId:'Miner ID',email:'Bittoken account email',phone:'Phone Number',country:'Country',addressLine1:'Address Line 1',addressLine2:'Address Line 2',city:'City',stateRegion:'State / Region',postalCode:'Postal Code'};
export const validateOrder=(o:OrderState)=>{const e:string[]=[];const rows=Object.values(o.selections);if(!rows.length)e.push('Choose at least one merchandise item.');rows.forEach(x=>{if(!x||!Number.isInteger(x.quantity)||x.quantity<1)e.push('Choose a whole quantity of at least 1.');if(x&&x.productType!=='cap'&&!x.size)e.push('Choose a clothing size.');});return [...e,...Object.entries(validateMember(o.member)).map(([key,error])=>`${memberLabel[key as MemberField]}: ${error}`)]};
