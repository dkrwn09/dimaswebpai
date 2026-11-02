const KEY="mo_bookmarks", HISTORY="mo_history";
const read=(key)=>{try{return JSON.parse(localStorage.getItem(key)||"[]")}catch{return []}};
const write=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
export const getBookmarks=()=>read(KEY);
export const isBookmarked=id=>getBookmarks().includes(id);
export function toggleBookmark(id){let items=getBookmarks();items=items.includes(id)?items.filter(x=>x!==id):[...items,id];write(KEY,items);return items.includes(id)}
export const getHistory=()=>read(HISTORY);
export function addHistory(id){let items=getHistory().filter(x=>x.id!==id);items.unshift({id,at:new Date().toISOString()});write(HISTORY,items.slice(0,30));}
export function removeBookmark(id){write(KEY,getBookmarks().filter(x=>x!==id))}
