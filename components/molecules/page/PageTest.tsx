import { FC, useState } from 'react';
import { Page } from './Page';

const pages = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Maecenas sed enim ut sem viverra aliquet.Blandit libero volutpat sed cras ornare arcu dui vivamus arcu.Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.Felis bibendum ut tristique et egestas quis ipsum.Tempor nec feugiat nisl pretium fusce id velit ut.Nibh tellus molestie nunc non blandit massa.Nec feugiat nisl pretium fusce id velit ut tortor pretium.Augue lacus viverra vitae congue eu consequat ac felis donec.Eget arcu dictum varius duis at consectetur lorem.Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et.Phasellus faucibus scelerisque eleifend donec.Sit amet mattis vulputate enim nulla aliquet porttitor lacus.Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim.Morbi quis commodo odio aenean sed adipiscing diam donec.Amet nulla facilisi morbi tempus iaculis urna.Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac.Facilisis volutpat est velit egestas dui id ornare arcu odio.Sed ullamcorper morbi tincidunt ornare massa eget.',
  'Ut venenatis tellus in metus vulputate eu scelerisque.Praesent tristique magna sit amet purus gravida quis.Tincidunt praesent semper feugiat nibh sed.Morbi tincidunt augue interdum velit.Quam vulputate dignissim suspendisse in est ante.Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.Varius duis at consectetur lorem donec massa sapien faucibus et.Suspendisse faucibus interdum posuere lorem ipsum dolor sit.Scelerisque fermentum dui faucibus in ornare quam.Interdum posuere lorem ipsum dolor sit.Tempus quam pellentesque nec nam.Felis donec et odio pellentesque diam volutpat.Tellus orci ac auctor augue mauris.Etiam non quam lacus suspendisse.Aliquam ut porttitor leo a diam sollicitudin tempor id.Arcu ac tortor dignissim convallis.',
  'Egestas dui id ornare arcu odio ut sem nulla.Integer quis auctor elit sed vulputate mi.Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.Cras semper auctor neque vitae tempus quam pellentesque nec nam.Faucibus a pellentesque sit amet porttitor eget dolor.Sapien pellentesque habitant morbi tristique senectus et netus.Sed elementum tempus egestas sed sed.Sapien faucibus et molestie ac feugiat.Leo vel orci porta non pulvinar neque laoreet suspendisse interdum.A scelerisque purus semper eget duis at tellus at urna.Ut diam quam nulla porttitor massa.Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.Libero nunc consequat interdum varius sit amet mattis vulputate.Ut sem nulla pharetra diam sit amet nisl suscipit.Placerat duis ultricies lacus sed turpis tincidunt.',
  'Eu volutpat odio facilisis mauris sit amet.Laoreet suspendisse interdum consectetur libero id.Eu augue ut lectus arcu bibendum.Et netus et malesuada fames ac turpis egestas sed tempus.Cursus sit amet dictum sit amet justo donec enim diam.Sit amet nisl suscipit adipiscing.In aliquam sem fringilla ut morbi tincidunt.Tempus egestas sed sed risus pretium.Facilisis magna etiam tempor orci eu.Fringilla urna porttitor rhoncus dolor purus non enim.Proin sed libero enim sed faucibus turpis.Volutpat maecenas volutpat blandit aliquam etiam erat.Mattis rhoncus urna neque viverra.Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.Placerat vestibulum lectus mauris ultrices eros in.',
  'Diam in arcu cursus euismod quis viverra.Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.Ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis.Faucibus in ornare quam viverra orci sagittis eu volutpat odio.Congue quisque egestas diam in arcu cursus.Lectus mauris ultrices eros in cursus turpis massa tincidunt.Faucibus in ornare quam viverra orci sagittis eu.Aliquam faucibus purus in massa tempor nec feugiat nisl.Viverra accumsan in nisl nisi scelerisque eu.At varius vel pharetra vel turpis nunc eget.Mauris vitae ultricies leo integer malesuada nunc vel risus.Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.Ac feugiat sed lectus vestibulum mattis.Phasellus faucibus scelerisque eleifend donec.Eget magna fermentum iaculis eu non diam phasellus vestibulum.Dictumst quisque sagittis purus sit amet.',
  'Odio aenean sed adipiscing diam donec adipiscing tristique risus.Sagittis orci a scelerisque purus semper.Interdum velit laoreet id donec ultrices tincidunt.Eget magna fermentum iaculis eu.Viverra orci sagittis eu volutpat odio facilisis.Id ornare arcu odio ut sem.Cursus in hac habitasse platea dictumst quisque sagittis purus sit.Faucibus purus in massa tempor nec.Massa tempor nec feugiat nisl pretium fusce id velit.Vitae nunc sed velit dignissim sodales.Sed odio morbi quis commodo odio aenean sed adipiscing diam.Augue mauris augue neque gravida in fermentum et sollicitudin ac.Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.Egestas tellus rutrum tellus pellentesque eu tincidunt tortor.Ultricies tristique nulla aliquet enim tortor.Nisl vel pretium lectus quam id.Eu volutpat odio facilisis mauris sit.Habitant morbi tristique senectus et netus.Vel orci porta non pulvinar neque laoreet suspendisse interdum.',
  'Amet commodo nulla facilisi nullam.Facilisis magna etiam tempor orci eu lobortis elementum nibh.Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt.Suspendisse sed nisi lacus sed.Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.Venenatis tellus in metus vulputate eu scelerisque.Amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus.Pulvinar sapien et ligula ullamcorper.Molestie nunc non blandit massa.In fermentum posuere urna nec tincidunt praesent semper feugiat.Ut enim blandit volutpat maecenas volutpat blandit.Quam viverra orci sagittis eu volutpat odio facilisis.Urna nunc id cursus metus aliquam.Ultrices tincidunt arcu non sodales neque sodales ut.Risus viverra adipiscing at in.Venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam.Tristique risus nec feugiat in fermentum posuere.',
  'Morbi blandit cursus risus at ultrices mi tempus.Augue interdum velit euismod in pellentesque massa placerat duis ultricies.Odio euismod lacinia at quis risus sed vulputate odio.Euismod nisi porta lorem mollis aliquam ut porttitor.Est ante in nibh mauris cursus mattis.Ipsum faucibus vitae aliquet nec.Tellus rutrum tellus pellentesque eu.Faucibus et molestie ac feugiat sed.Diam quam nulla porttitor massa id neque aliquam vestibulum morbi.Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis.Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.At urna condimentum mattis pellentesque.Dolor morbi non arcu risus.Sed sed risus pretium quam vulputate.Morbi quis commodo odio aenean sed adipiscing diam.Posuere lorem ipsum dolor sit amet.Ridiculus mus mauris vitae ultricies leo integer.Non pulvinar neque laoreet suspendisse.A diam sollicitudin tempor id eu nisl nunc mi ipsum.',
  'Cursus turpis massa tincidunt dui ut ornare lectus.Volutpat maecenas volutpat blandit aliquam etiam erat velit.Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit.Lacus laoreet non curabitur gravida arcu.Fringilla phasellus faucibus scelerisque eleifend donec.Mauris augue neque gravida in fermentum et sollicitudin ac.Sed blandit libero volutpat sed.Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et.Molestie at elementum eu facilisis sed odio morbi quis.Interdum velit laoreet id donec ultrices tincidunt.Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci.Massa enim nec dui nunc.Libero id faucibus nisl tincidunt eget nullam non nisi.Morbi tristique senectus et netus et malesuada fames ac.Aliquam sem fringilla ut morbi.Faucibus ornare suspendisse sed nisi lacus sed.Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.Tincidunt arcu non sodales neque sodales ut etiam sit amet.',
  'Eget gravida cum sociis natoque penatibus.Dignissim convallis aenean et tortor at risus.Sed pulvinar proin gravida hendrerit.Urna cursus eget nunc scelerisque viverra mauris in aliquam sem.Quis varius quam quisque id diam vel.Viverra maecenas accumsan lacus vel.Feugiat nisl pretium fusce id velit ut tortor pretium viverra.Ipsum dolor sit amet consectetur.Magna sit amet purus gravida quis blandit turpis.Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.Aenean et tortor at risus viverra.',
  'Lacus vel facilisis volutpat est velit egestas dui id.Mi eget mauris pharetra et ultrices neque ornare aenean.Pretium nibh ipsum consequat nisl vel.Aliquam faucibus purus in massa tempor nec feugiat nisl pretium.Etiam dignissim diam quis enim lobortis scelerisque fermentum dui.Arcu felis bibendum ut tristique et egestas quis ipsum.Purus in massa tempor nec feugiat.Id aliquet lectus proin nibh nisl condimentum id venenatis.Dui faucibus in ornare quam.Augue eget arcu dictum varius duis at consectetur lorem donec.Neque sodales ut etiam sit amet nisl purus.Pellentesque nec nam aliquam sem et tortor.Urna condimentum mattis pellentesque id nibh tortor id aliquet.Turpis in eu mi bibendum.Amet justo donec enim diam.Tristique risus nec feugiat in fermentum posuere.Sed euismod nisi porta lorem mollis aliquam.Enim ut tellus elementum sagittis vitae et.Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur.',
  'Egestas tellus rutrum tellus pellentesque eu.Amet tellus cras adipiscing enim eu turpis egestas.Mauris pharetra et ultrices neque.Elit pellentesque habitant morbi tristique.Ullamcorper morbi tincidunt ornare massa eget egestas.Facilisi morbi tempus iaculis urna.Vitae proin sagittis nisl rhoncus mattis rhoncus urna.Ullamcorper sit amet risus nullam eget felis eget nunc.Gravida neque convallis a cras semper auctor neque vitae tempus.Ut tellus elementum sagittis vitae et leo duis ut.Sed blandit libero volutpat sed cras ornare.Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.Facilisis gravida neque convallis a cras semper auctor neque vitae.Elit sed vulputate mi sit.Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue.Volutpat lacus laoreet non curabitur gravida arcu.Eget nullam non nisi est sit.Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada.',
  'Massa id neque aliquam vestibulum morbi blandit cursus.Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.Ultricies tristique nulla aliquet enim tortor.Risus at ultrices mi tempus imperdiet.Non tellus orci ac auctor.Amet nulla facilisi morbi tempus.Elementum pulvinar etiam non quam lacus suspendisse faucibus.Eu lobortis elementum nibh tellus molestie nunc non blandit massa.Vulputate eu scelerisque felis imperdiet proin fermentum leo.Neque laoreet suspendisse interdum consectetur libero id.In nulla posuere sollicitudin aliquam ultrices sagittis orci a.Quis enim lobortis scelerisque fermentum dui faucibus in.Urna nec tincidunt praesent semper feugiat nibh sed pulvinar.Semper eget duis at tellus.Mi proin sed libero enim.',
  'Sagittis aliquam malesuada bibendum arcu vitae.Est lorem ipsum dolor sit.Quam adipiscing vitae proin sagittis nisl.Urna molestie at elementum eu facilisis sed odio.Sem et tortor consequat id porta nibh venenatis cras.Est ultricies integer quis auctor elit sed.Sed turpis tincidunt id aliquet risus feugiat in ante.Porttitor massa id neque aliquam vestibulum morbi blandit cursus.Arcu dui vivamus arcu felis bibendum ut tristique et egestas.Suscipit adipiscing bibendum est ultricies integer.Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.Neque ornare aenean euismod elementum nisi quis eleifend quam.',
  'Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.Condimentum lacinia quis vel eros donec ac odio tempor orci.Egestas maecenas pharetra convallis posuere morbi.Volutpat ac tincidunt vitae semper quis lectus nulla at.Eget aliquet nibh praesent tristique magna sit.Semper eget duis at tellus at urna condimentum mattis.Scelerisque fermentum dui faucibus in ornare quam viverra orci.Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.Tempor orci dapibus ultrices in iaculis.Urna molestie at elementum eu facilisis sed odio.',
  'Nisl condimentum id venenatis a condimentum.Arcu ac tortor dignissim convallis aenean et tortor at.Sit amet consectetur adipiscing elit.Nunc sed id semper risus in hendrerit.Convallis aenean et tortor at risus viverra.Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt.Vestibulum morbi blandit cursus risus at.Eu facilisis sed odio morbi quis commodo.Morbi tincidunt ornare massa eget.Arcu cursus euismod quis viverra nibh cras pulvinar mattis.Magna etiam tempor orci eu lobortis elementum nibh tellus molestie.Senectus et netus et malesuada fames.Tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus.Sed felis eget velit aliquet sagittis.Cras semper auctor neque vitae tempus quam.Volutpat diam ut venenatis tellus in metus vulputate.Faucibus pulvinar elementum integer enim neque.Arcu vitae elementum curabitur vitae nunc.Cras adipiscing enim eu turpis egestas pretium aenean.',
  'In hac habitasse platea dictumst vestibulum rhoncus est pellentesque.Turpis egestas sed tempus urna et pharetra.Nisl nunc mi ipsum faucibus vitae aliquet nec.Mauris augue neque gravida in fermentum et sollicitudin ac orci.Eu mi bibendum neque egestas congue quisque.Odio ut sem nulla pharetra diam sit amet.Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.Id neque aliquam vestibulum morbi blandit cursus risus.Ut tortor pretium viverra suspendisse potenti.In metus vulputate eu scelerisque felis imperdiet proin.Aliquam purus sit amet luctus venenatis.Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.Vitae suscipit tellus mauris a diam.Ac tortor dignissim convallis aenean et tortor at risus viverra.Augue eget arcu dictum varius duis at.Est ultricies integer quis auctor elit sed.Eget gravida cum sociis natoque penatibus et magnis dis parturient.Vel elit scelerisque mauris pellentesque.Lobortis feugiat vivamus at augue eget arcu dictum varius duis.',
  'Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus.Sed tempus urna et pharetra pharetra massa massa ultricies.Ac auctor augue mauris augue neque gravida in.Ut aliquam purus sit amet luctus venenatis lectus.Molestie nunc non blandit massa enim nec dui nunc mattis.Vel fringilla est ullamcorper eget nulla.Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus.Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat.Sit amet consectetur adipiscing elit pellentesque habitant morbi.Vivamus at augue eget arcu dictum varius.Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.Nibh tellus molestie nunc non blandit massa enim.Nisi lacus sed viverra tellus.Pellentesque habitant morbi tristique senectus.Id aliquet lectus proin nibh nisl condimentum.Sit amet nisl suscipit adipiscing bibendum est ultricies.Mi in nulla posuere sollicitudin aliquam.Viverra accumsan in nisl nisi scelerisque.Quam id leo in vitae turpis.Sit amet nisl purus in mollis nunc sed.',
  'Cursus eget nunc scelerisque viverra mauris in aliquam sem.Suscipit tellus mauris a diam maecenas sed enim ut.Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque.Vitae ultricies leo integer malesuada nunc vel.Tempor orci eu lobortis elementum nibh tellus molestie nunc.Feugiat scelerisque varius morbi enim.Pretium lectus quam id leo in vitae.Tortor condimentum lacinia quis vel eros donec ac odio tempor.Tincidunt lobortis feugiat vivamus at.Fringilla urna porttitor rhoncus dolor purus non enim.Velit laoreet id donec ultrices tincidunt arcu non.Ac turpis egestas sed tempus.Eros in cursus turpis massa tincidunt dui ut ornare.Ornare massa eget egestas purus viverra.At urna condimentum mattis pellentesque id nibh.Sit amet nulla facilisi morbi tempus iaculis urna.Amet massa vitae tortor condimentum lacinia quis vel.Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus.Egestas erat imperdiet sed euismod nisi.',
  'Tristique sollicitudin nibh sit amet commodo nulla facilisi.Lectus mauris ultrices eros in cursus turpis massa tincidunt.Vel quam elementum pulvinar etiam non quam lacus.Et pharetra pharetra massa massa ultricies mi quis.Nam at lectus urna duis convallis convallis.Sapien faucibus et molestie ac feugiat.Tincidunt ornare massa eget egestas purus viverra accumsan in.Neque volutpat ac tincidunt vitae.Aliquam eleifend mi in nulla posuere.Congue quisque egestas diam in arcu cursus euismod.Et netus et malesuada fames ac turpis egestas integer eget.Lobortis scelerisque fermentum dui faucibus in ornare.Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.Vel eros donec ac odio tempor orci dapibus ultrices.Sem integer vitae justo eget magna fermentum iaculis eu.Lorem ipsum dolor sit amet consectetur adipiscing elit.Lacinia at quis risus sed vulputate odio.Dignissim diam quis enim lobortis scelerisque fermentum.',
  'Tortor pretium viverra suspendisse potenti nullam ac tortor vitae.Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.Pellentesque diam volutpat commodo sed egestas egestas.Viverra adipiscing at in tellus integer feugiat scelerisque.Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.Elit duis tristique sollicitudin nibh sit amet.Euismod quis viverra nibh cras pulvinar.Pretium aenean pharetra magna ac placerat.Auctor neque vitae tempus quam pellentesque.Commodo viverra maecenas accumsan lacus.Diam maecenas ultricies mi eget mauris pharetra et.Mattis nunc sed blandit libero volutpat sed cras ornare.Tristique senectus et netus et malesuada fames ac turpis.Id diam vel quam elementum pulvinar.Tristique sollicitudin nibh sit amet commodo.Pharetra vel turpis nunc eget.',
  'Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.Id velit ut tortor pretium.Volutpat est velit egestas dui id ornare arcu.Nisi lacus sed viverra tellus in hac habitasse.Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.Ut pharetra sit amet aliquam.Auctor neque vitae tempus quam pellentesque nec nam aliquam sem.Nunc scelerisque viverra mauris in aliquam sem fringilla.Egestas integer eget aliquet nibh praesent tristique magna sit amet.Eros in cursus turpis massa tincidunt dui ut.Tincidunt augue interdum velit euismod in pellentesque massa.Ligula ullamcorper malesuada proin libero.Eu consequat ac felis donec et.Nisl tincidunt eget nullam non nisi est.Sagittis vitae et leo duis.Sed nisi lacus sed viverra tellus in hac.',
  'Facilisi etiam dignissim diam quis enim lobortis scelerisque.Velit aliquet sagittis id consectetur purus.Euismod lacinia at quis risus sed vulputate.Nec feugiat nisl pretium fusce.A diam sollicitudin tempor id eu.Rhoncus est pellentesque elit ullamcorper dignissim cras.Fringilla phasellus faucibus scelerisque eleifend donec pretium.Malesuada proin libero nunc consequat interdum varius sit amet.Mauris sit amet massa vitae tortor condimentum lacinia quis.Eget arcu dictum varius duis at consectetur.Faucibus interdum posuere lorem ipsum dolor.Facilisis sed odio morbi quis commodo.Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.Volutpat odio facilisis mauris sit amet.Egestas fringilla phasellus faucibus scelerisque.Vestibulum lectus mauris ultrices eros in.',
  'Ornare lectus sit amet est placerat.Tempor nec feugiat nisl pretium.Quis vel eros donec ac odio.Nulla at volutpat diam ut venenatis.Enim blandit volutpat maecenas volutpat blandit aliquam.Nam libero justo laoreet sit.Ac auctor augue mauris augue neque gravida.A cras semper auctor neque.Consectetur adipiscing elit ut aliquam purus sit.Ornare lectus sit amet est placerat in.Nulla pharetra diam sit amet.Cursus metus aliquam eleifend mi in nulla.Amet mattis vulputate enim nulla.Duis at tellus at urna condimentum mattis pellentesque.Suspendisse interdum consectetur libero id faucibus nisl tincidunt.Facilisis magna etiam tempor orci.Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc.',
  'Placerat in egestas erat imperdiet sed euismod nisi porta lorem.Arcu felis bibendum ut tristique et egestas quis.Malesuada pellentesque elit eget gravida cum sociis natoque penatibus.Quis imperdiet massa tincidunt nunc pulvinar sapien et.At ultrices mi tempus imperdiet nulla.Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.Suscipit tellus mauris a diam maecenas sed enim ut sem.Sapien faucibus et molestie ac feugiat sed lectus vestibulum.Vestibulum lectus mauris ultrices eros.Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.Urna porttitor rhoncus dolor purus.Ac placerat vestibulum lectus mauris ultrices.Dolor sit amet consectetur adipiscing elit duis.Adipiscing at in tellus integer feugiat scelerisque varius.Purus in massa tempor nec feugiat nisl pretium fusce.',
  'In hendrerit gravida rutrum quisque non tellus orci ac.Sit amet commodo nulla facilisi nullam vehicula ipsum.Sit amet facilisis magna etiam tempor orci eu lobortis.Odio facilisis mauris sit amet massa vitae tortor.Est ultricies integer quis auctor elit sed vulputate mi sit.Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.Lectus vestibulum mattis ullamcorper velit sed.Phasellus vestibulum lorem sed risus.Iaculis nunc sed augue lacus viverra.Egestas erat imperdiet sed euismod nisi porta.Eu feugiat pretium nibh ipsum consequat nisl.Mattis vulputate enim nulla aliquet porttitor.',
  'Elit eget gravida cum sociis natoque penatibus et magnis dis.Egestas sed tempus urna et.Tristique senectus et netus et malesuada fames ac turpis.Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.Pharetra et ultrices neque ornare aenean euismod elementum nisi quis.Vulputate enim nulla aliquet porttitor.Ipsum dolor sit amet consectetur adipiscing elit.Maecenas volutpat blandit aliquam etiam erat velit.Malesuada fames ac turpis egestas sed tempus.Turpis massa tincidunt dui ut ornare lectus sit.Egestas dui id ornare arcu odio.Mus mauris vitae ultricies leo integer malesuada nunc.Quis enim lobortis scelerisque fermentum dui faucibus in.Id faucibus nisl tincidunt eget nullam.Auctor elit sed vulputate mi sit amet.Eget mauris pharetra et ultrices.Integer eget aliquet nibh praesent tristique magna sit amet purus.Dignissim enim sit amet venenatis urna cursus.Vulputate enim nulla aliquet porttitor lacus luctus accumsan.',
  'Tortor at risus viverra adipiscing at.Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.Non curabitur gravida arcu ac tortor dignissim.Vel pharetra vel turpis nunc eget lorem dolor sed viverra.Massa vitae tortor condimentum lacinia quis vel eros donec.Quis blandit turpis cursus in hac.Sit amet commodo nulla facilisi.Facilisi cras fermentum odio eu feugiat pretium nibh.Sed vulputate mi sit amet mauris.Ut sem viverra aliquet eget sit amet.Turpis massa tincidunt dui ut ornare lectus sit.Egestas maecenas pharetra convallis posuere morbi leo urna molestie.Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar.Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate.Quisque non tellus orci ac auctor augue mauris augue.Natoque penatibus et magnis dis parturient montes nascetur ridiculus.Nam at lectus urna duis convallis convallis tellus.',
  'Morbi enim nunc faucibus a pellentesque sit amet.Sed sed risus pretium quam vulputate.Nulla malesuada pellentesque elit eget gravida cum sociis natoque.Orci dapibus ultrices in iaculis nunc.Neque viverra justo nec ultrices dui sapien eget mi proin.Ac orci phasellus egestas tellus.Sed ullamcorper morbi tincidunt ornare massa eget.Mi tempus imperdiet nulla malesuada pellentesque.At elementum eu facilisis sed odio.Rhoncus mattis rhoncus urna neque viverra justo.Aliquet nibh praesent tristique magna sit amet purus.Sociis natoque penatibus et magnis dis parturient montes.Bibendum at varius vel pharetra vel turpis nunc eget lorem.Volutpat commodo sed egestas egestas fringilla.Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna.Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus.Lorem dolor sed viverra ipsum nunc.',
  'Mauris in aliquam sem fringilla.Nam aliquam sem et tortor consequat id porta nibh venenatis.Consectetur libero id faucibus nisl tincidunt.Arcu cursus vitae congue mauris rhoncus aenean vel.At erat pellentesque adipiscing commodo elit at imperdiet.Viverra justo nec ultrices dui sapien eget mi proin.Nisl rhoncus mattis rhoncus urna neque.Adipiscing at in tellus integer feugiat.Faucibus in ornare quam viverra orci sagittis.Sed egestas egestas fringilla phasellus faucibus scelerisque.Pretium nibh ipsum consequat nisl vel pretium lectus.Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.Dictum fusce ut placerat orci nulla.Mauris pharetra et ultrices neque.Convallis a cras semper auctor neque vitae tempus quam.Id velit ut tortor pretium viverra suspendisse potenti.',
  'Eu volutpat odio facilisis mauris sit amet massa vitae.Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.Facilisis mauris sit amet massa.Purus faucibus ornare suspendisse sed nisi lacus sed viverra.Libero justo laoreet sit amet cursus.Arcu non odio euismod lacinia at.Convallis a cras semper auctor.Pretium aenean pharetra magna ac placerat.In nisl nisi scelerisque eu ultrices vitae auctor.Mauris a diam maecenas sed enim ut sem viverra.Sed viverra tellus in hac habitasse platea.Ac odio tempor orci dapibus ultrices in.In est ante in nibh mauris cursus.',
  'Sit amet facilisis magna etiam tempor orci eu.Elementum integer enim neque volutpat ac tincidunt.Sit amet risus nullam eget felis eget nunc lobortis.Bibendum arcu vitae elementum curabitur vitae nunc sed velit.Ornare arcu odio ut sem.Faucibus turpis in eu mi bibendum neque.Vitae tempus quam pellentesque nec nam aliquam sem et.Eros donec ac odio tempor.Faucibus in ornare quam viverra orci sagittis.Porttitor eget dolor morbi non arcu risus quis varius quam.Faucibus a pellentesque sit amet porttitor eget dolor morbi non.Id semper risus in hendrerit gravida rutrum quisque.Venenatis tellus in metus vulputate.Quisque non tellus orci ac auctor.Auctor elit sed vulputate mi sit amet mauris commodo quis.Maecenas pharetra convallis posuere morbi leo urna molestie.Nibh nisl condimentum id venenatis a.Tincidunt eget nullam non nisi est sit.Sapien nec sagittis aliquam malesuada.Varius duis at consectetur lorem donec.',
  'Id aliquet lectus proin nibh nisl condimentum id venenatis.Sapien faucibus et molestie ac feugiat sed.Aliquet eget sit amet tellus.Nec ultrices dui sapien eget mi proin.Ornare aenean euismod elementum nisi quis eleifend quam.Lacus vel facilisis volutpat est velit egestas.Ornare quam viverra orci sagittis eu volutpat odio facilisis.Mattis enim ut tellus elementum sagittis vitae et.Cras pulvinar mattis nunc sed blandit libero.Dolor morbi non arcu risus.Cum sociis natoque penatibus et magnis dis parturient montes.',
  'Rhoncus mattis rhoncus urna neque viverra justo nec.Blandit libero volutpat sed cras ornare arcu dui vivamus.Aliquam eleifend mi in nulla posuere.Nunc eget lorem dolor sed viverra ipsum.Massa tincidunt dui ut ornare lectus sit amet.Vulputate odio ut enim blandit volutpat maecenas volutpat.Habitant morbi tristique senectus et netus et.Accumsan sit amet nulla facilisi morbi.Est pellentesque elit ullamcorper dignissim.Augue eget arcu dictum varius duis.In eu mi bibendum neque egestas congue quisque.Fames ac turpis egestas sed tempus urna et pharetra pharetra.',
  'Neque sodales ut etiam sit amet.Amet consectetur adipiscing elit pellentesque habitant morbi tristique.Aliquet eget sit amet tellus cras adipiscing enim eu turpis.Mattis ullamcorper velit sed ullamcorper morbi.Sit amet mattis vulputate enim nulla aliquet.Et magnis dis parturient montes nascetur ridiculus mus mauris.Risus nec feugiat in fermentum posuere urna nec tincidunt.Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.Nunc non blandit massa enim nec dui nunc.Sapien pellentesque habitant morbi tristique senectus et netus et.Aenean euismod elementum nisi quis eleifend quam adipiscing.Viverra nam libero justo laoreet.Sed risus ultricies tristique nulla aliquet enim tortor at.Amet dictum sit amet justo donec enim.Ullamcorper eget nulla facilisi etiam dignissim diam quis enim.',
  'Page intentionally blank',
];

export const PageTest: FC = ({}) => {
  const [activeBucket, setActiveBucket] = useState(1);

  const bucketClicked = (index: number) => {
    setActiveBucket(index);
  };

  return (
    <div>
      <Page
        numItems={pages.length}
        bucketSize={2}
        currentBucket={activeBucket}
        maxDisplay={3}
        onClick={bucketClicked}
      />
      <div>
        Pages {activeBucket * 2 - 1} and {activeBucket * 2}
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '8px', width: '50%' }}>{pages[activeBucket * 2 - 2]}</div>
        <div style={{ margin: '8px', width: '50%' }}>{pages[activeBucket * 2 - 1]}</div>
      </div>
    </div>
  );
};
