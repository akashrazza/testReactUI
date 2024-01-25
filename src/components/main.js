import Card from "./card";
import SideBar from "./sidebar";
import Topbar from "./topbar";

function Main() {
    return(<>
    <div style={{height: '100vh',width:'100vw',display:'flex'}}>
        <div style={{height: '100%',width:'30%'}}>
            <SideBar/>
        </div>
        <div style={{width:'70%'}}>
            <Topbar/>
            <Card/>
        </div>
    </div>
    </>)
}
export default Main;