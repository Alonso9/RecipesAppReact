import { Navigate, Route, Routes } from "react-router-dom";
import { RecipePage, RecipeDetail } from "../pages";

export const RecipeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <RecipePage/>} />
        <Route path="/recipe" element={ <RecipeDetail/>} />

        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
