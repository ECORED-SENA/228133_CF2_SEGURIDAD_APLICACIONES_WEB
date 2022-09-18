<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Introducción a la ciberseguridad
    
    .d-flex.flex-wrap.mb-5.bg-gradient
      .col-xl-7.order-2.order-xl-1.pe-xl-4
        p.position-relative(style="z-index: 1;") La ciberseguridad, también conocida como seguridad informática o seguridad digital, es el área relacionada con la informática y telemática en la protección de la infraestructura computacional, ya sea una máquina o el parque computacional de una organización 
        p.position-relative(style="z-index: 1;") La ciberseguridad se emplea en todo tipo de empresas públicas y privadas siendo aplicada en proyectos como: #[em home office] o teletrabajo, videoconferencias; cuando se habla de ciberseguridad abarca muchas líneas o áreas una de ellas es la seguridad en aplicaciones <em>web</em> y parte de las generalidades que en Colombia están enmarcadas en el Conpes 3701 de 2011 desarrollado por los Ministerios de Interior y de Justicia, Relaciones Exteriores, Defensa Nacional, Tecnologías de la Información y las Comunicaciones, Departamento Administrativo de Seguridad, Departamento Nacional de Planeación-DJSG-DIFP-DIES-OI, Fiscalía General, y que busca impulsar lineamientos de política en ciberseguridad y ciberdefensa orientados a desarrollar una estrategia nacional que contrarreste el incremento de las amenazas informáticas que afectan significativamente; por lo que se crea el grupo de respuesta a emergencias cibernéticas de Colombia colCERT.
      .col.xl-5.order-1.order-xl-2.mb-4.mb-xl-0
        img.position-relative.mx-auto(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 505px; z-index: 1;;")

    .tarjeta.color-acento-contenido.py-3.px-5.mb-5(style="border-radius: 0; margin-left: -3rem; margin-right: -3rem; background: linear-gradient(0deg, rgba(17,31,79,1) 0%, rgba(46,82,212,1) 100%)" data-aos="fade")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/interes.svg" style="max-width: 50px")
        .col.ps-lg-5
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.texto-blanco.mb-1 CONPES
              p.text-small.texto-blanco(style="max-width: 791px") Para una mayor apropiación del tema, se invita a conocer el documento de lineamientos de política para ciberseguridad y ciberdefensa del Conpes 3701 de 2011.
            .col-sm-auto
              a.boton.color-acento-botones.texto-negro.px-4(href="https://tic.bogota.gov.co/sites/default/files/marco-legal/CONPES%203701%20DE%202011.pdf" target="_blank")
                span Ir al enlace

    p.mb-5 Dentro de las figuras de ciberseguridad de una organización se encuentra al gerente o CEO, el departamento de Tecnología e Información (TI), el personal de seguridad informática o de la información y el departamento legal o jurídico, todos ellos desempeñan un rol importante en la actuación frente a un caso de un incidente informático o la protección de datos. 

    .d-flex.flex-wrap.mb-5
      img.mb-auto(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 85px")
      p.col.mb-0.ps-4 La seguridad en aplicaciones <em>web</em> se considera como una rama de la ciberseguridad donde la misma busca preservar la integridad, confidencialidad y disponibilidad de la información.
        br
        br
        |Hoy en día, las empresas que están a la vanguardia de la transformación digital y en plena cuarta Revolución Industrial deben blindarse y proteger sus aplicaciones <em>web</em>, pero sobre todo el activo más importante dentro de una organización: la información que ingresa día a día y se puede verse afectada por diversas técnicas de #[em hacking] y los ataques informáticos que en Colombia y el mundo van en gran aumento. 
    img.mb-5(src="@/assets/curso/temas/tema1/img-3.jpg")

    p.mb-5 Es importante tener en cuenta que dentro de la ciberseguridad los principios de seguridad son la confidencialidad, integridad y disponibilidad.

    .d-flex.flex-wrap.align-items-end.mb-5(style="border-top-right-radius: 109px; background-color: #DFE4FA;")
      img.mb-4.col-xl-6.mb-4.mb-xl-0(src="@/assets/curso/temas/tema1/img-4.svg")
      img.col-xl-6(src="@/assets/curso/temas/tema1/img-5.svg")
    p Con lo anterior, se puede afirmar que la ciberseguridad son las técnicas de procedimiento y uso de herramientas que se implementan con el único objetivo de proteger y blindar la información que se genera en computadores, dispositivos móviles, herramientas API, servidores, redes, información en la nube y sistemas electrónicos. Si una organización cuenta con personal capacitado en el área de la ciberseguridad y herramientas, sabrá detectar a tiempo los riesgos informáticos y afrontar con facilidad una vulnerabilidad o ataque informático. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.bg-gradient
  position: relative
  &::after
    content: ''
    position: absolute
    top: 0
    left: -3rem
    height: 100%
    width: calc(100% + 6rem)
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(213,250,238,1) 32%, rgba(213,250,238,1) 67%, rgba(255,255,255,1) 100%)
</style>
