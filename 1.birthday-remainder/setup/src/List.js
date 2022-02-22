import React from 'react'

const List = ({people_data}) => {
  return (
    <>
        {
            people_data.map((item) =>{
                const {id, name, age, image} = item;
                return(
                    <article key={id} className={"person"}>
                        <img src={image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </article>
                )   
            })
        }
    </>
  )
}

export default List;