export default function CardHeader(){
    return(
    <div style={{display:"flex",justifyContent:'space-between'}}>
        <div>
            <h1>History Quiz</h1>
            <h3>Answer the following question</h3>
        </div>
        <div style={{display:'flex',alignItems:'center'}}>
            Timer:--:--
        </div>
    </div>
    )
}