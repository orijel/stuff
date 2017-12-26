import { TestBed, inject } from '@angular/core/testing';

import { GalleryModalComponent } from './gallery-modal.component';

describe('a gallery-modal component', () => {
	let component: GalleryModalComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				GalleryModalComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([GalleryModalComponent], (GalleryModalComponent) => {
		component = GalleryModalComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});