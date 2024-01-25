export default function Topbar(){
    const inputStyle = {
        width: '356px',
        height: '64px',
        borderRadius: '30px'

    }
    return(
        <div style={{display:'flex'}}>
            <div style={{width:'50%'}}>
                <input type="text" placeholder="Search" style={inputStyle}/>
            </div>
            <div style={{width:'30%'}}>
            <button> Start Quiz</button>
            </div>
            <div style={{display:'flex', width:'20%'}}>
                icon
                nam
            </div>
        </div>
    );
};