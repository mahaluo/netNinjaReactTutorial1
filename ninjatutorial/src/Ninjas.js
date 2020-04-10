import React from 'react';
import './Ninjas.css'

//functional components are used when we dont need state
//could use props instead of ninjas but this is more clear
const Ninjas = ({ninjas, deleteNinja}) => {

    //console.log(this.props);
    //const ninjas = this.props.ninjas
    //const { ninjas } = props;
 /*    
     const ninjaList = ninjas.map(ninja => {
        if (ninja.age > 20) {
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div> 
                <div>Belt: {ninja.belt}</div>
                </div>
            )
        }
        else {
            return null
        } 
    }) */
//conditional output examples
//adding parenthesis to a function makes it invoke automatically, see delete ninja how to avoid this with arrows (anonymous function)
    return (
        <div>
        <div className="ninja-list">
            { 
                ninjas.map(ninja => {
                    return ninja.age > 20 ? (
                        <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div> 
                        <div>Belt: {ninja.belt}</div>
                        <button onClick={ () => {deleteNinja(ninja.id)} }>Delete ninja</button>
                        </div>
                    ) : null 
                })
            }
        </div>
        </div>
    ) 
}


export default Ninjas;