// utils.js
export function timeAgo(d){
  if(!d) return '';
  const s = Math.floor((Date.now() - d.getTime())/1000);
  if(s<60) return `${s}s`;
  if(s<3600) return `${Math.floor(s/60)}m`;
  if(s<86400) return `${Math.floor(s/3600)}h`;
  return `${Math.floor(s/86400)}d`;
}
