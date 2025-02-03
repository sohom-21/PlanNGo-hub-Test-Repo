import { Component } from '@angular/core';

@Component({
  selector: 'app-provider',
  standalone: true,
  imports: [],
  template: `
  <div class="image">
    <div class="container-c">
  <img src="https://img.freepik.com/free-photo/high-angle-desktop-with-laptop-copy-space_23-2148430882.jpg?t=st=1738340353~exp=1738343953~hmac=d881d674b1fc5f1176ebf5c5a4910796273b37202eb5f5c0db8c3fe2f0c93443&w=1060" alt="Norway" style="width:100%;">
  <div class="text-block" style="width:100%;height:100%; overflow:hidden;">
    <div class="heading">
      <div><h1 class="sph">Service Provider</h1></div>
    </div>
    <div class="imgcon">
    <button>
      <img src="https://cdn-icons-png.flaticon.com/512/4577/4577208.png" alt="" height="90px">
    </button>
    <p class="emph">Add a Employee</p>
    </div>
    <div class="imgcon-2">
    <button>
      <img src="https://png.pngtree.com/png-clipart/20230330/ourmid/pngtree-taxi-yellow-taxi-png-image_6673883.png" alt="" height="90px">
    </button>
    <p class="cabc">Add a Cab</p>
    </div>
    
  </div>
</div>
    </div>
    `,
  styleUrl: './provider.component.css'
})
export class ProviderComponent {

}
