import Aside from "./Aside";
import Header from "./Header";

function ParentComponent(props) {


    return (
        <>
         <Header handleAsideOpen={props.appAsideOpen} />
         <Aside asideOpen={props.appOpen} handleAsideOpen={props.appAsideOpen} />
        </>
    );
}

export default ParentComponent;
