import Card from "../Components/Card"
import { useCharStates } from "../Context/Context"

const Favs = () => {
  
    const {favs} = useCharStates()
    console.log(favs)
    return (
    <div>
        {/* {favs} */}
        {favs.map(fav => <Card char={fav} key={fav.id}/>)}
    </div>
  )
}

export default Favs