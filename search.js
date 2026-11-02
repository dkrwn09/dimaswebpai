export function searchReadings(items,query){const q=query.trim().toLocaleLowerCase("id");if(!q)return [];return items.filter(x=>(x.title+" "+x.categoryName).toLocaleLowerCase("id").includes(q));}
