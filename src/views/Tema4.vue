<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Informe o políticas de sistema de gestión de seguridad de la información o afines

    .d-flex.flex-wrap.align-items-center.mb-5.bg-t4(style="background-repeat: no-repeat;" :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg.svg')})`}")
      .col-xl-6.order-2.order-xl-1.ms-auto.px-xl-4.py-4.d-flex.flex-wrap.align-items-center
        p.mb-4(data-aos="fade-right") En la gestión de información, cuando se generan informes o documentos sobre los hallazgos y vulnerabilidades detectadas, estos deben contener un completo diligenciamiento con la compilación de datos recolectados por el técnico en seguridad de aplicaciones <em>web</em>. 
          br
          br
          |El informe de auditoría sirve para verificar los cumplimientos de planes, estrategias y programas, los informes son necesarios para el monitoreo y toma de decisiones; este debe contener los siguientes ítems como resultados:
        .tarjeta.color-acento-contenido.px-3.py-2(style="background: linear-gradient(180deg, #FEEEDD 0%, #F38E1E 100%)" data-aos="fade")
          .row.justify-content-around.align-items-center(data-aos="fade-up")
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/interes.svg" style="min-width: 33px")
            .col.ps-lg-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Modelo informe de auditoría
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro.px-4(:href="obtenerLink('downloads/auditoria_PDF.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      .col-xl-5.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto.mx-xl-0
        img.mx-auto(src="@/assets/curso/temas/tema4/img-1.svg" data-aos="fade-left" style="max-width: 533px;")


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

<style lang="sass">
.bg-t4
  @media (max-width: 768px)
    background: #e5fdf3 !important
    padding: .5rem
</style>
