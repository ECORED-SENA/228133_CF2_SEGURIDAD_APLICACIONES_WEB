<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación de riesgos
    
    p Se invita a ampliar el conocimiento sobre los riesgos informáticos, a través del siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BPJGzZASDi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Dentro de los métodos de identificación de riesgos, la organización debe clasificar los tipos de riesgos en altos, medios y bajos; en este caso, en las aplicaciones <em>web</em> se revisan varios factores como, el lenguaje de programación y la arquitectura del <em>software</em> para poder empezar a analizar y trabajar sobre las posibles amenazas o vulnerabilidades. 

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background: linear-gradient(0deg, rgba(17,31,79,1) 0%, rgba(46,82,212,1) 100%)" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/interes.svg" style="max-width: 50px")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Guía de gestión de riesgos MinTIC
              p.text-small.texto-blanco(style="max-width: 791px") Conozca la guía de gestión de riesgos del Ministerio de Tecnologías de la información y las comunicaciones (MinTic) de Colombia.
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro.px-4(href="https://www.mintic.gov.co/gestionti/615/articles-5482_G7_Gestion_Riesgos.pdf" target="_blank")
                span Ir al enlace

    p.mb-5  En el siguiente recurso se podrán conocer las técnicas de #[em hacking] utilizadas por los ciberdelincuentes:
    .col-xl-10.mx-auto.mb-5
      img(src="@/assets/curso/temas/tema2/img-1.jpg")
      p.px-4.py-3(style="border-bottom-right-radius: 12px; border-bottom-left-radius: 12px; background: linear-gradient(180deg, rgba(255,255,255,.73) 0%, rgba(210,240,231,1) 100%)") El pirata informático mediante vectores de ataque, utiliza técnicas de #[em hacking] e ingeniería social, revisa y analiza las debilidades de seguridad de la aplicación o sistema de información, revisa los controles de seguridad con que cuenta la herramienta o la infraestructura y los impactos, buscando el objetivo final: afectar el negocio de la organización.

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background: linear-gradient(0deg, rgba(17,31,79,1) 0%, rgba(46,82,212,1) 100%)" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/interes.svg" style="max-width: 50px")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 Norma ISO 27005
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro.px-4(href="https://sisteseg.com/blog/wp-content/uploads/2018/11/Metodologia-para-Gesti%C3%B3n-de-Riesgos-V-1.0.pdf" target="_blank")
                span Ir al enlace

    .d-flex.flex-wrap.align-items-center.mb-5
      p.col-xl-8.order-2.order-xl-1 El comercio electrónico que en Colombia está reglamentado a través de la Ley 527 de 1999 ha sido uno de los factores que ha llevado a las empresas a tener un crecimiento económico, pues dentro de la transformación digital una de las líneas de medición es la venta por medio de canales digitales o aplicaciones <em>web</em>.
        br
        br
        |Pero también existen diferentes factores de ataques en los que está la suplantación que es muy común en este tipo de aplicaciones <em>web</em> donde un pirata informático podrá alterar el contenido de una <em>cookie</em> y redireccionarlo a un servidor diferente. 
      img.col-xl-4.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-2.svg")
    .d-flex.mb-5
      p.px-4.py-2.fw-bold(style="background-color: #A6E6CA") Metodología o estándar para identificar riesgos en aplicaciones <em>web</em>
    
    .d-flex.flex-wrap.mb-5
      img.col-xl-4.mx-auto.mb-4.mb-xl-0(src="@/assets/curso/temas/tema2/img-3.jpg")
      .col-xl-8.ps-xl-4
        p.mb-4 Una metodología para identificar riesgos en aplicaciones <em>web</em>, podría ser a través de una matriz de riesgo de seguridad de la información, esta herramienta permite analizar o dar valor a los riesgos. 
          br
          br
          |La matriz de riesgos 3 X 3 permite clasificar y valorar las diferentes vulnerabilidades comunes según la metodología OWASP dentro de las aplicaciones de sitios <em>web</em> de la siguiente manera:
        .tarjeta.color-acento-contenido.px-3.py-2.mb-5(style="background: linear-gradient(180deg, #FEEEDD 0%, #F38E1E 100%)" data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/interes.svg")
            .col.ps-lg-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Matriz Riesgos
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="obtenerLink('downloads/matrizRiesgos_pdf.docx')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 Con la metodología <em>Open Web Application Security Project</em> (OWASP) se pueden aplicar técnicas de evaluación, tipos de controles frente a los riesgos, aplicar métodos de medición de controles y localizar vulnerabilidades.

    img.mb-5(src="@/assets/curso/temas/tema2/img-4.jpg")

    p.mb-5 Las diferentes acciones que se tomen ayudarían a jerarquizar el impacto, es importante que las aplicaciones en sitios <em>web</em> se corran en dominios aptos y seguros para la protección de la información de los usuarios.

    .d-flex.mb-5
      p.px-4.py-2.fw-bold(style="background-color: #A6E6CA") Modelo OSI en la capa 7
    
    p.mb-5 El modelo OSI en la capa 7 nivel de aplicación, presenta los siguientes protocolos:

    img.mb-5.col-lg-10.col-xl-6.mx-auto(src="@/assets/curso/temas/tema2/img-5.jpg")
  
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1	Análisis de riesgos
    
    p.mb-5 En la identificación de riesgos se debe tener presente que:


    .col-xl-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(style="background-color: #FFF4D6 !important;")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-6.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 #[span.p-1.fw-bold(style="background-color: #C3EBDF") La inseguridad] se enuncia en procesos de la composición de los resultados de un suceso y, #[span.p-1.fw-bold(style="background-color: #C3EBDF") la probabilidad de ocurrencia] está asociada a las fuentes de riesgos, comportamiento humano (interno y externo), comercio, economía y mercado, circunstancias políticas, tecnología, eventos naturales y, finalmente, organizacionales.
      p Dentro de la gestión del riesgo de seguridad de la información se debe proteger la empresa ante las posibles consecuencias como pérdidas de confidencialidad, integridad, disponibilidad… también se tienen otras como no-repudio, autenticidad, o confiabilidad de los activos, el incumplimiento de la legislación, pérdidas financieras, impacto de orden público, impactos de orden internacional. 
    p.mb-5 A continuación, se invita a conocer el ciclo PHVA, según la #[em Guía de gestión de riesgos de seguridad de la información], presentada por el Icontec:

    img.mb-5.col-lg-10.col-xl-8.mx-auto(src="@/assets/curso/temas/tema2/img-7.svg")

    p.mb-5 En las políticas lo primero será determinar el tratamiento que se le dará a cada uno de los riesgos identificados en la aplicación, donde se puede tomar la decisión de aceptarlos, transferirlos o ejercer controles apropiados según el nivel de riesgo. Posteriormente, habrá que determinar qué controles se pueden ejercer, una vez determinada la causa que los origina. 
      br
      br
      |De acuerdo con lo anterior, los controles pueden ser de tipo:

    .d-flex.flex-wrap.mb-5
      .col-md-6.col-lg-4.px-md-3.position-relative(@mouseover="mostrarIndicador = false")
        .indicador--hover(v-if="mostrarIndicador")
        .tarjeta-hover-color
          .header-img.p-3.p-lg-5
            img.mx-auto(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 105px;")
            h3(style="display: block; border-radius: 50px; background-color: white;") Controles preventivos
          .body-text.p-4
            p Estos se anticipan a los eventos no deseados antes de que sucedan. 
      .col-md-6.col-lg-4.px-md-3
        .tarjeta-hover-color
          .header-img.p-3.p-lg-5
            img.mx-auto(src="@/assets/curso/temas/tema2/img-9.svg" style="max-width: 105px;")
            h3(style="display: block; border-radius: 50px; background-color: white;") Controles detectivos
          .body-text.p-4
            p Permiten identificar eventos en el momento en el que se presentan. 
      .col-md-6.col-lg-4.px-md-3
        .tarjeta-hover-color
          .header-img.p-3.p-lg-5
            img.mx-auto(src="@/assets/curso/temas/tema2/img-10.svg" style="max-width: 105px;")
            h3(style="display: block; border-radius: 50px; background-color: white;") Controles correctivos
          .body-text.p-4
            p Se caracterizan por la toma de acciones para prevenir eventos no deseados.

    p.mb-5 Los anteriores controles buscan mitigar los riesgos de mayor impacto y la posibilidad de ocurrencia. Luego, se buscará integrar estos controles a las políticas y procedimientos empresariales para configurar un sistema de control denominado #[span.p-1.fw-bold(style="background-color: #C3EBDF") sistema de gestión de seguridad de la información.]

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2	Herramientas de valoración de riesgos

    .d-flex.flex-wrap.mb-5
      img.col-xl-4.mx-auto.mb-4.m-xl-auto(src="@/assets/curso/temas/tema2/img-11.jpg" style="max-width: 505px")
      .col-xl-8.ps-xl-4
        p.mb-4 La valoración del riesgo asegura que para que el sistema logre los efectos previstos, con las mismas herramientas, se pueden prevenir o reducir efectos indeseados, logrando la mejora progresiva, integrando e implementando acciones en sus procesos.
          br
          br
          |Se puede encontrar también empresas en el mundo que ofrecen una gran cantidad de herramientas para la valoración del riesgo como:
        .d-flex.flex-wrap.me-auto(style="background-color: #FFFCF4")
          img.m-auto.mb-4.mb-lg-0(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 174px")
          ul.lista-ul--color.mb-4.d-flex.flex-wrap.align-content-center.ps-md-5(data-aos="fade-left")
            li.d-flex.mb-0.w-100
              <svg style="max-width: 13px" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#3bc192"/>
              </svg>
              p.mb-0.ps-3.fw-bold SpiraPlan de Inflectra Corp.
            li.d-flex.mb-0.w-100
              <svg style="max-width: 13px" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#3bc192"/>
              </svg>
              p.mb-0.ps-3.fw-bold Rastreados a 1.
            li.d-flex.mb-0.w-100
              <svg style="max-width: 13px" xmlns="http://www.w3.org/2000/svg" width="13.088" height="9.816" viewBox="0 0 13.088 9.816">
                <path id="comprobado" d="M0,69.769l4.482,4.49,8.606-8.6-1.236-1.218L4.482,71.8,1.218,68.542Z" transform="translate(0 -64.443)" fill="#3bc192"/>
              </svg>
              p.mb-0.ps-3.fw-bold SIsoMetriz y otras.
    p.mb-5 Un informe de valoración de riesgos debe contener:

    .d-flex.flex-wrap.align-items-stretch
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5(@mouseover="mostrarIndicador2 = false")
          .indicador--hover(v-if="mostrarIndicador2")
          img.mb-4(src="@/assets/curso/temas/tema2/img-13.svg" style="max-width: 82px;")
          p.mb-0 Todas las vulnerabilidades y amenazas detectadas.
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5
          img.mb-4(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 82px;")
          p.mb-0 La matriz de riesgo aplicada. 
      .col-12.col-md-6.col-lg-4.px-md-3.d-flex.content-tj-hover
        .tarjeta-hover-up.p-4.p-xl-5
          img.mb-4(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 82px;")
          p.mb-0 La información con los métodos y técnicas utilizados.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    mostrarIndicador2: true,
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

<style lang="sass">
.tarjeta-hover-color
  border-radius: 5px
  overflow: hidden
  margin-bottom: 1rem
  .header-img
    background-color: #294DDC
    text-align: center
    transition: all .2s linear
    img
      margin-bottom: 1rem
    h3
      display: inline
      padding: .5rem 1.5rem
      margin-right: auto
      margin-left: auto
  .body-text
    background-color: #E5EAFF
    transition: all .2s linear
  &:hover
    .header-img
      background-color: #6ACEAE
    .body-text
      background-color: #C7EDE0
.tarjeta-hover-up
  background-color: #E5EAFF
  border-radius: 10px
  width: 100%
  margin-bottom: 2rem
  position: relative
  transition: all .3s
  top: 0
  right: 0
.content-tj-hover:hover
  .tarjeta-hover-up
    background-color: #A6E6CA
    top: -1rem
    right: -1rem
</style>
