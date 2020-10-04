import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { CatalogsList } from './pages/catalogs/CatalogsList'
import { Catalog } from './pages/catalogs/Catalog'
import { CreateCatalog } from './pages/catalogs/CreateCatalog'
import { EditCatalog } from './pages/catalogs/EditCatalog'
import { CreateGood } from './pages/goods/CreateGood'
import { EditGood } from './pages/goods/EditGood'

function App() {
  return (
      <BrowserRouter>
        <Switch>
            <Route exact path='/catalogs' component={CatalogsList} />
            <Route exact path='/catalog/:id' component={Catalog} />
            <Route exact path='/catalogs/new' component={CreateCatalog} />
            <Route exact path='/catalogs/edit/:id' component={EditCatalog} />
            <Route exact path='/goods/new' component={CreateGood} />
            <Route exact path='/goods/edit/:id' component={EditGood} />
            <Redirect to='/catalogs' />
        </Switch>
      </BrowserRouter>
  )
}

export default App;
