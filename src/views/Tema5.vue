<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Organización y protocolos de seguridad y privacidad

    .col-xl-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color: #002856 !important;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Gracias a internet el mundo vive interconectado; así, el protocolo TCP/IP se encarga de que cada ordenador, dispositivo móvil y servicio <em>web</em> disponible a través de internet cuente con una dirección IP exclusiva como 92.183.215.3. Así, el sistema DNS “indica”, con ayuda del servidor de nombres, esta dirección en un dominio como, por ejemplo, www.example.org, que al ojo humano le resulta más sencillo de leer. Este proceso también se denomina resolución de nombres.
    p.mb-5 A continuación, se podrán conocer algunos de estos protocolos de seguridad y privacidad: 

    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Dominios
    
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead(style="background-color: #6ACEAE")
          tr
            th(style="border: none") Protocolo
            th(style="border: none") Subdominio
            th(style="border: none") Nombre del dominio
            th(style="border: none") Extensión
            th(style="border: none") Descripción
        tbody
          tr.text-center(style="background-color: #F6F6F6")
            td https://
            td www
            td example
            td org
            td.text-start organización sin ánimo de lucro.
          tr.text-center
            td https://
            td www
            td example
            td co
            td.text-start dirección de dominio Colombia.
          tr.text-center(style="background-color: #F6F6F6")
            td https://
            td www
            td example
            td blog
            td.text-start dirección de blog.
          tr.text-center
            td https://
            td example
            td co
            td uk
            td.text-start dominio de tercer o cuarto nivel.
          tr.text-center(style="background-color: #F6F6F6")
            td https://
            td en
            td example
            td org
            td.text-start dirección para proyecto <em>web</em>.
    p.mb-5 Así como la tabla de los dominios, se deben tener en cuenta los protocolos de aplicaciones oficiales de internet que se pueden usar.


    .d-flex.flex-wrap.align-items-center
      .col-12.col-lg-6.px-3
        .d-flex.mb-3.w-100(style="background-color: #FFF4D6")
          img(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 190px")
          p.p-3.mb-0 #[b Domain Name Protocol ]
            br
            br
            |(Protocolo de nombres de dominio).
        .d-flex.mb-3.w-100(style="background-color: #FFF4D6")
          img(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 190px")
          p.p-3.mb-0 #[b Exterior Gateway Protocol ]
            br
            br
            |(Protocolo de pasarela exterior).
      .col-12.col-lg-6.px-3
        .d-flex.mb-3.w-100(style="background-color: #FFF4D6")
          img(src="@/assets/curso/temas/tema5/img-4.svg" style="max-width: 190px")
          p.p-3.mb-0 #[b File Transfer Protocol]
            br
            br
            |(Protocolo de transferencia de archivos).
        .d-flex.mb-3.w-100(style="background-color: #FFF4D6")
          img(src="@/assets/curso/temas/tema5/img-5.svg" style="max-width: 190px")
          p.p-3.mb-0 #[b Name/Finger Protocol ]
            br
            br
            |(Protocolo de nombres/finger).
        .d-flex.mb-3.w-100(style="background-color: #FFF4D6")
          img(src="@/assets/curso/temas/tema5/img-6.svg" style="max-width: 190px")
          p.p-3.mb-0 #[b Telnet Protocol ]
            br
            br
            |(Protocolo Telnet).
            
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
