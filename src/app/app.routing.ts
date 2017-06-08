import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GifComponent} from './components/gif/gif.component';


const appRoutes: Routes = [
	{
		path: '',
		component: GifComponent
	},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);