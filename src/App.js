import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CatalogsList } from './pages/catalogs/CatalogsList'
import { Catalog } from './pages/catalogs/Catalog'
import { CreateCatalog } from './pages/catalogs/CreateCatalog'

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/catalogs' component={CatalogsList} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/catalog/new' component={CreateCatalog} />
            <Redirect to='/catalogs' />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
