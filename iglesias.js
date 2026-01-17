const iglesias = [
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 2",
    direccion: "Boulevard El Naranjo, Zona 2, Guatemala",
    telefono: "2234-1002",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6515,
    lng: -90.4896,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 3",
    direccion: "Avenida Elena, Zona 3, Guatemala",
    telefono: "2234-1003",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6239,
    lng: -90.5274,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 4",
    direccion: "Cuarta Avenida 10-50, Zona 4, Guatemala",
    telefono: "2234-1004",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6155,
    lng: -90.5191,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 5",
    direccion: "Calzada La Paz, Zona 5, Guatemala",
    telefono: "2234-1005",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6304,
    lng: -90.5032,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Mixco",
    direccion: "Calzada San Juan, Mixco, Guatemala",
    telefono: "2234-1011",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6308,
    lng: -90.5858,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
  {
    nombre: "Universal Zona 1",
    direccion: "6a Avenida 10-45, Zona 1, Ciudad de Guatemala",
    telefono: "2234-1001",
    imagen: "imagenes/ejemplo1.jpg",
    lat: 14.6407,
    lng: -90.5133,
    horarios: {
      lunes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      martes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      miercoles: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      jueves: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      viernes: ["7:00 am", "9:00 am", "12:00 pm", "3:00 pm", "6:00 pm"],
      sabado: ["7:30 am", "9:00 am"],
      domingo: ["8:00 am", "10:00 am", "3:00 pm"]
    }
  },
];
