function SideBar() {
    const textcolor = {
        fontFamily: 'Poppins',
fontSize: '20px',
fontWeight: 600,
lineHeight: '30px',
letterSpacing: '0em',
textAlign: 'left',
    };
const selectedBox = {
 backgroundColor: '#696F79',

};

const list = {
    borderRadius: '9px',
    padding: '10px 15px',
    width: 'fit-content',
    margin: '0px 15px',
}
    return(
<>
<div style={{height:'10%',fontFamily: 'Poppins',
fontSize: '30px',
fontWeight: 800,
lineHeight: '45px',
letterSpacing: '0em',
textAlign: 'left',
}}>
Quit Time
</div>
<div  style={{height:'80%'}}>
    <div style={{...list,...selectedBox}}>
        <span>logo</span>
        <span style={{...textcolor}}>Dashboard</span>
    </div>

    <div style={list}>
        <span>logo</span>
        <span style={textcolor}>Support</span>
    </div>

    <div style={list}>
        <span>logo</span>
        <span style={textcolor}>Notification</span> 
    </div>
</div>
<div style={{height:'10%'}}>
<span style={{...textcolor,...list}}>Logo</span> 
    
</div>


</>
)}
export default SideBar;