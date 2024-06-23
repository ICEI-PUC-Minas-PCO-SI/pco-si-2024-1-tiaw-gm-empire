'use strict';

const conteudoNoticia = document.getElementById('conteudoNoticia');

if (!localStorage.getItem('noticia')) {
    // redirecionar para inicio
}

const noticia = JSON.parse(localStorage.getItem('noticia'));

console.log(noticia);

// const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non nisi est sit amet. Tellus in hac habitasse platea. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tempus quam pellentesque nec nam. Volutpat lacus laoreet non curabitur gravida arcu. Sit amet massa vitae tortor condimentum lacinia. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Ligula ullamcorper malesuada proin libero. Nunc mattis enim ut tellus elementum sagittis vitae et. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Enim neque volutpat ac tincidunt vitae semper. Dolor morbi non arcu risus quis varius quam quisque. Mi eget mauris pharetra et ultrices.

// Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae tempus quam pellentesque nec nam aliquam. Tortor posuere ac ut consequat semper viverra nam libero. Sed risus ultricies tristique nulla aliquet enim tortor. Justo nec ultrices dui sapien eget mi. Sagittis aliquam malesuada bibendum arcu vitae. Ac tincidunt vitae semper quis lectus nulla at volutpat. Egestas pretium aenean pharetra magna ac placerat vestibulum. Turpis nunc eget lorem dolor sed viverra ipsum. Arcu ac tortor dignissim convallis aenean et tortor at risus.

// Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Duis tristique sollicitudin nibh sit amet commodo nulla. Feugiat sed lectus vestibulum mattis ullamcorper. Rutrum quisque non tellus orci ac auctor augue. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium. Faucibus purus in massa tempor nec feugiat. Eleifend quam adipiscing vitae proin sagittis. Viverra maecenas accumsan lacus vel. Consectetur adipiscing elit ut aliquam purus sit amet. Sed turpis tincidunt id aliquet risus feugiat. Eu turpis egestas pretium aenean pharetra. Id diam maecenas ultricies mi. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Morbi quis commodo odio aenean sed adipiscing. At augue eget arcu dictum varius duis. Tellus pellentesque eu tincidunt tortor aliquam.

// Aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Blandit libero volutpat sed cras. Et odio pellentesque diam volutpat. Imperdiet nulla malesuada pellentesque elit. Egestas diam in arcu cursus euismod quis viverra nibh cras. Tortor condimentum lacinia quis vel eros donec ac odio. Erat velit scelerisque in dictum non consectetur a erat nam. Ut morbi tincidunt augue interdum velit euismod in. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Sit amet tellus cras adipiscing enim eu turpis. Adipiscing bibendum est ultricies integer quis auctor elit. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Sed augue lacus viverra vitae congue eu consequat ac. Diam ut venenatis tellus in metus vulputate eu.

// A lacus vestibulum sed arcu non odio euismod lacinia. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Sagittis vitae et leo duis ut diam quam nulla. Nulla facilisi cras fermentum odio. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Tristique senectus et netus et malesuada fames ac turpis egestas. Ut placerat orci nulla pellentesque dignissim enim. Bibendum arcu vitae elementum curabitur. In hendrerit gravida rutrum quisque non tellus orci. Dictum non consectetur a erat nam at. Pretium aenean pharetra magna ac placerat vestibulum lectus. Ultricies tristique nulla aliquet enim tortor at.`;

conteudoNoticia.innerHTML = `
    <h1>${noticia.titulo}</h3>
    <p>${noticia.conteudo}<p>
`;
