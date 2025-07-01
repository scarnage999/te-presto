import { AppDataService } from '../../domain/services/AppDataService';
import { Feature, Testimonial, AppInfo } from '../../domain/models/Feature';

export class MockAppDataService implements AppDataService {
  getAppInfo(): AppInfo {
    return {
      name: 'Te Presto',
      tagline: 'Lleva el control de tus préstamos y deudas',
      description: 'La aplicación más fácil y confiable para gestionar tus préstamos personales, recordar pagos y mantener un historial completo de tus transacciones financieras.',
      downloadUrl: './te-presto.apk',
      version: '1.0.0'
    };
  }

  getFeatures(): Feature[] {
    return [
      {
        id: '1',
        title: 'Registro de Préstamos y Deudas',
        description: 'Registra fácilmente todos tus préstamos y deudas con detalles completos, montos, fechas y contactos.',
        icon: 'DollarSign'
      },
      {
        id: '2',
        title: 'Recordatorios Automáticos',
        description: 'Nunca olvides un pago con notificaciones inteligentes que te alertan antes de las fechas límite.',
        icon: 'Bell'
      },
      {
        id: '3',
        title: 'Historial de Pagos',
        description: 'Mantén un registro detallado de todos los pagos realizados y pendientes con estados actualizados.',
        icon: 'FileText'
      },
      {
        id: '4',
        title: 'Control Entre Amigos',
        description: 'Gestiona préstamos con amigos y familiares de manera transparente y organizada.',
        icon: 'Users'
      },
      {
        id: '5',
        title: 'Reportes Financieros',
        description: 'Obtén insights claros sobre tu situación financiera con reportes detallados y gráficos.',
        icon: 'BarChart3'
      },
      {
        id: '6',
        title: 'Seguridad Total',
        description: 'Tus datos están protegidos con encriptación avanzada y respaldo automático en la nube.',
        icon: 'Shield'
      }
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        id: '1',
        name: 'María González',
        role: 'Profesional Independiente',
        content: 'Te Presto me ha ayudado enormemente a organizar mis préstamos personales. Ya no se me olvida ningún pago y tengo todo bajo control.',
        rating: 5
      },
      {
        id: '2',
        name: 'Carlos Rodríguez',
        role: 'Emprendedor',
        content: 'Excelente app para manejar las finanzas con amigos. Transparent y fácil de usar. La recomiendo 100%.',
        rating: 5
      },
      {
        id: '3',
        name: 'Ana Martínez',
        role: 'Estudiante',
        content: 'Perfecta para estudiantes como yo. Me ayuda a llevar el control de los préstamos con mis compañeros de clase.',
        rating: 5
      },
      {
        id: '4',
        name: 'Roberto Silva',
        role: 'Contador',
        content: 'Como profesional de las finanzas, valoro mucho la precisión y organización que ofrece esta aplicación.',
        rating: 5
      }
    ];
  }
}