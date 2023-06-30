import { connect } from "react-redux";
import Card from "../Card/Card";

export const Favorites = ({myFavorites}) =>{
    return(
        <div>
          {myFavorites.map((fav)=>(
            <Card
            key = {fav.id}
            character = {fav}

            />
          ))}
        </div>
    )
}

export const mapStateToProps = (state) =>{
return {
    myFavorites: state.myFavorites
}
}


 export default connect(mapStateToProps, null)(Favorites);