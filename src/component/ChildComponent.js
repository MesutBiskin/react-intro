function ChildComponent(){
    return (
      <div> 
      <h2> Hi I'm child</h2>
      <GrandChild firstName ={'Joe'} age={102}  pet={'🐢'}/>
      <GrandChild firstName ={'John'} age={24} pet={'🐟'}/>
      <GrandChild firstNmae ={'Rosie'} age={50} pet={'🐡'}/>
      <GrandChild firstName ={'Little T'} age={4} pet={'🐠'}/>
      </div>
    )
    }

    const GrandChild = (props) => {
        console.log('props ->',props)
      
       const birthYear = 2023 - props.age
       const pet = props.pet
      
        return(
          <div>
            I'm GrandKid {props.firstName} and I'm from {birthYear}  {pet}
          </div>
        )
      }

export default ChildComponent