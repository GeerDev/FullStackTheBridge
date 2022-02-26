const Person = (props) => {
  return (
    <>
        <div>Componente Person</div>
        <span>{ props.name }</span>
        <span>{ props.surname }</span>
        <span>{ props.age }</span>
        {/* <span>{ props.object.name}</span> */}
    </>
  )
}

export default Person