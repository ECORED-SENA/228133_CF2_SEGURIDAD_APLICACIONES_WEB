<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Auditoría infraestructura tecnológica 

    .d-flex.flex-wrap.mb-5
      .col-xl-8.order-2.order-xl-1
        p Las auditorías informáticas internas o externas siempre son recomendadas para prevenir pérdidas o fugas de información y económicas en todos los aspectos (sanciones, ventas, ingresos, clientes, entre otros) para la organización; por ello, en cualquier infraestructura tecnológica estas auditorías se deben realizar al #[em hardware] por los requerimientos técnicos de la aplicación, en este caso, y el #[em software] para el análisis de vulnerabilidades o actualizaciones a los componentes de este garantizando la seguridad y confianza en las aplicaciones <em>web</em>. 
          br
          br
          |Se deben tener en cuenta los aspectos técnicos de la aplicación, sin embargo se han elegido cuatro tipos de auditorías en aplicaciones <em>web</em>, a saber:
      img.col-xl-4.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto(src="@/assets/curso/temas/tema3/img-1.jpg" style="max-width: 400px;")

    SlyderA.tarjeta.slide-a-edit.p-3.p-md-4.mb-5(tipo="b" data-aos="fade-right")
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .col-xl-8.pe-xl-3.order-2.order-xl-1
          h4 Auditoría SEO
          p(style="max-width: 512px") En este tipo de auditoría se revisa el posicionamiento o la indexación que se analiza frente a la búsqueda, se estudian los enlaces, el contenido, <em>marketing</em> digital frente al posicionamiento en las redes sociales y el análisis de comparaciones con las posibles competencias.
        img.col-xl-4.order-1.order-xl-2.mx-auto(src='@/assets/curso/temas/tema3/img-4.svg' style="max-width: 400px")
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .col-xl-8.pe-xl-3.order-2.order-xl-1
          h4 Auditoría de seguridad
          p(style="max-width: 512px") En este tipo de auditoría se revisa el estado del servidor, el sistema operativo y que los mismos se encuentren en buenas condiciones de <em>hardware</em> y con sus actualizaciones al día. Se analizan las posibles vulnerabilidades informáticas detectadas existentes y analizar que no se tengan fugas de información y se cumpla con la Ley de Protección de Datos.
        img.col-xl-4.order-1.order-xl-2.mx-auto(src='@/assets/curso/temas/tema3/img-5.svg' style="max-width: 400px")
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .col-xl-8.pe-xl-3.order-2.order-xl-1
          h4 Auditoría de usabilidad y accesibilidad
          p(style="max-width: 512px") Es una de las auditorías más complejas, ya que en la misma se ayuda a detectar el mal funcionamiento la conectividad y tiempos de respuesta de la aplicación.
            br
            |Además, se suelen utilizar herramientas de seguimiento que generan mapas de calor en conectividad y pruebas de testing desde varios dispositivos al tiempo. 
        img.col-xl-4.order-1.order-xl-2.mx-auto(src='@/assets/curso/temas/tema3/img-6.svg' style="max-width: 400px")
      
      .d-flex.flex-wrap.col-xl-11.mx-auto
        .col-xl-8.pe-xl-3.order-2.order-xl-1
          h4 Auditoría de rendimiento
          p(style="max-width: 512px") En esta auditoría se enfoca en analizar y estudiar la velocidad de conectividad de cargas en la aplicación <em>web</em>, se puede recomendar cambiar a mejores servidores donde se aloja el proyecto. 
        img.col-xl-4.order-1.order-xl-2.mx-auto(src='@/assets/curso/temas/tema3/img-7.svg' style="max-width: 400px")
      

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.order-2.order-xl-1
        p.mb-5 Dentro de los métodos de administración más complejos están las auditorías forenses, ya que estas tienen el objetivo de recolectar toda la evidencia digital y pruebas que permitan comprobar si existen o no fraudes, o delitos en una empresa, conforme a los protocolos nacionales e internacionales para mantener la integridad de la misma y su posterior cadena de custodia de la información; desde el punto normativo en Colombia se deben cumplir con los requisitos de los artículos 5°, 6° y 7° de la Ley 527 de 1999.
        .tarjeta.color-acento-contenido.px-3.py-2.mb-5(style="background: linear-gradient(180deg, #FEEEDD 0%, #F38E1E 100%)" data-aos="fade")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/interes.svg")
            .col.ps-lg-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 #[b Ley 527 de 1999]
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro.px-4(href="https://www.mindeporte.gov.co/recursos_user/2019/Juridica/Normograma/Leyes/Ley-527-de-1999.pdf" target="_blank")
                    span Ir al enlace
      img.col-xl-4.mx-auto.mb-4.mb-xl-0.order-1.order-xl-2(src="@/assets/curso/temas/tema3/img-2.jpg" style="max-width: 400px")
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-xl-3.mx-auto.mb-4.mb-xl-0(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 295px")
      .col-xl-9.ps-xl-4
        p.mb-0 Dentro de la distribución de dominios en la auditoría informática está la planeación y organización donde es establece el cronograma y las diferentes estrategias de análisis o métodos para usar en la misma, seguidamente está la adquisición e implementación como establecer los diferentes correctivos y dar soluciones a los inconvenientes encontrados en la misma, además, se recomienda el servicio y soporte frente a los controles de aplicación sin dejar a un lado el monitoreo con el que toda organización debe evaluar frecuentemente la calidad, integridad y confidencialidad. 
          br
          br
          |En cada auditoría se deben cumplir con los protocolos de seguridad informática, ya que hay que ceñirse a las reglas o normas donde se garantiza la confidencialidad, integridad y disponibilidad de toda la información.


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
