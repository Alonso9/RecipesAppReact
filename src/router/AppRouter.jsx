import { Route, Routes } from "react-router-dom";
import { RecipeRoutes } from "../App/routes/RecipeRoutes";


export const AppRouter = () => {
  return (
    <>
        <Routes>
        <Route path="/*" element={ <RecipeRoutes/> } />
        {/* <Route path="Consultas/*" element={ <ConsultasRoutes/> } /> */}
        </Routes>
    </>
  )
}
