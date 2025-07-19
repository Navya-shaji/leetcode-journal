function diStringMatch(s: string): number[] {
    let arr:number[]=[]
    let a:number=0;
    let b:number=s.length
    for(let i=0;i<=s.length;i++){
        if(s[i]=="I"){
            arr.push(a)
            a++
        }else {
            arr.push(b)
            b--
        }
    }
   return arr
};