import {
    FormNewPassword,
    FormsInputs,
    ObjectErrorsMessages,
    ObjectPasswordChecks,
} from '../../types/form';
export const OBJECT_LABELS_FIELDS:Record<keyof FormsInputs, string> = {
    fname: "Nombre completo",
    name: 'Nombre',
    last_name: 'Apellido',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    password2: 'Confirmar Contraseña',
    dni: 'DNI',
    cell_phone: 'Teléfono',
    cell_phone_secondary: 'Teléfono secundario',
    address: 'Dirección',
    age: 'Edad',
    gender_type: 'Género',
    two_factor_enabled: 'Autenticación en Dos Pasos',
    role_id: 'Rol',
    cuil: 'CUIL',
    cuit: 'CUIT',
    name_bussines: 'Nombre de la Empresa',
    phone_bussines: 'Teléfono de la Empresa',
    address_bussines: 'Dirección de la Empresa',
    type: 'Tipo de Empresa',
    description: 'Descripción',
    url: 'URL de la sucursal',
    auth_gender_type: "Género",
    phone: "Teléfono",
    category: 'Categoría',
    price: 'Precio',
    product_title: 'Nombre',
    product_variation_title: 'Nombre de variante',
    quantity: 'Stock',
    sub_category: 'Subcategoría',
    user_active: "Activo"
};

export const OBJECT_PLACEHOLDERS_FIELDS:Record<keyof FormsInputs, string>  = {
    fname: "Ingresa tu nombre completo",
    name: 'Ingresa tu nombre',
    last_name: 'Ingresa tu apellido',
    email: 'Ingresa tu correo electrónico',
    password: 'Ingresa tu contraseña',
    password2: 'Confirma tu contraseña',
    dni: 'Ingresa tu DNI',
    cell_phone: 'Ingresa tu número de teléfono',
    cell_phone_secondary: 'Ingresa tu número de teléfono secundario',
    address: 'Ingresa tu dirección',
    age: 'Ingresa tu edad',
    gender_type: 'Selecciona tu género',
    two_factor_enabled: 'Habilitar autenticación en dos pasos',
    role_id: '',
    cuil: 'Ingresa tu CUIL',
    cuit: 'Ingresa tu CUIT',
    name_bussines: 'Ingresa el nombre de tu empresa',
    phone_bussines: 'Ingresa el teléfono de la empresa',
    address_bussines: 'Ingresa la dirección de la empresa',
    type: 'Selecciona el tipo de empresa',
    description: 'Ingresa una descripción de la empresa',
    url: 'Ingresa la url de la empresa',
    auth_gender_type: "Ingrese su género",
    phone: "Teléfono",
    category: 'Selecciona categoría',
    price: 'Coloca un precio',
    product_title: 'Ingresa un nombre de producto',
    product_variation_title: 'Ingresa un nombre para la variante',
    quantity: 'Coloca una cantidad de tu stock',
    sub_category: 'Selecciona una subcategoría',
    user_active: "Estado del usuario"
};

const fields = [''];

export const formValidate = (
    formData: FormsInputs,
    requiredFields: string[] = fields
): ObjectErrorsMessages => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const nameBusinessRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\-._,]{2,}$/;
    const lastNameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const dniRegex = /^\d{8,10}$/;
    const addressRegex = /^[a-zA-Z0-9\s,.'-]{5,}$/;
    const ageRegex = /^\d{1,2}$/;
    const cuilCuitRegex = /^\d{11}$/; // CUIL y CUIT: 11 dígitos exactos
    const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/

    const errors: ObjectErrorsMessages = {
        fname: '',
        name: '',
        last_name: '',
        email: '',
        password: '',
        password2: '',
        dni: '',
        cell_phone: '',
        cell_phone_secondary: '',
        address: '',
        age: '',
        gender_type: '',
        two_factor_enabled: '',
        role_id: '',
        cuil: '',
        cuit: '',
        name_bussines: '',
        phone_bussines: '',
        address_bussines: '',
        type: '',
        description: '',
        url: '',
        auth_gender_type: '',
        phone: '',
        product_variation_title: '',
        category: '',
        price: '',
        quantity: '',
        sub_category: '',
        product_title: '',
        user_active: ''
    };

    // Validar cada campo

    if (requiredFields.includes('product_title') && !formData.product_title) {
        errors.product_title = 'El nombre del producto es obligatorio';
    } else if (formData.product_title && !nameRegex.test(formData.product_title)) {
        errors.product_title = 'Nombre Inválido';
    }

    if (requiredFields.includes('product_variation_title') && !formData.product_variation_title) {
        errors.product_variation_title = 'El nombre de la variante del producto es obligatorio';
    } else if (formData.product_variation_title && !nameRegex.test(formData.product_variation_title)) {
        errors.product_variation_title = 'Nombre Inválido';
    }

    if (requiredFields.includes('category') && !formData.category) {
        errors.category = 'Debes seleccionar una categoría.';
    }

    if (requiredFields.includes('sub_category') && !formData.sub_category) {
        errors.sub_category = 'Debes seleccionar una Subcategoría.';
    }

    if (requiredFields.includes('description') && !formData.description) {
        errors.description = 'Debes proporcionar una descripición.';
    }
    // else if (!formData.category) {
    //     errors.category = 'Categoría inválida';
    // }

    if (requiredFields.includes('price') && !formData.price) {
        errors.price = 'El precio es obligatorio';
    } else if (formData.price && (isNaN(Number(formData.price)) || Number(formData.price) <= 0)) {
        errors.price = 'El precio debe ser un número válido mayor a 0';
    }

    if (requiredFields.includes('quantity') && !formData.quantity) {
        errors.quantity = 'La cantidad es obligatoria';
    } else if (formData.quantity && (!Number.isInteger(Number(formData.quantity)) || Number(formData.quantity) < 0)) {
        errors.quantity = 'La cantidad debe ser un número entero igual o mayor a 0';
    }

    if (requiredFields.includes('name') && !formData.name) {
        errors.name = 'El nombre es obligatorio';
    } else if (formData.name && !nameRegex.test(formData.name)) {
        errors.name = 'Nombre Inválido';
    }

    if (requiredFields.includes('fname') && !formData.fname) {
        errors.fname = 'El nombre es obligatorio';
    } else if (formData.fname && !nameRegex.test(formData.fname)) {
        errors.fname = 'Nombre Inválido';
    }

    if (requiredFields.includes('last_name') && !formData.last_name) {
        errors.last_name = 'El apellido es obligatorio';
    } else if (formData.last_name && !lastNameRegex.test(formData.last_name)) {
        errors.last_name = 'Apellido Inválido';
    }

    if (requiredFields.includes('email') && !formData.email) {
        errors.email = 'El email es obligatorio';
    } else if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = 'Email Inválido';
    }

    if (requiredFields.includes('password') && !formData.password) {
        errors.password = 'La contraseña es obligatoria';
    } else if (formData.password && !passwordRegex.test(formData.password)) {
        errors.password =
            'La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula, un número y un carácter especial.';
    }

    if (requiredFields.includes('password2') && !formData.password2) {
        errors.password2 = 'Debes confirmar tu contraseña';
    } else if (formData.password2 && formData.password !== formData.password2) {
        errors.password2 = 'Las contraseñas no coinciden';
    }

    if (requiredFields.includes('dni') && !formData.dni) {
        errors.dni = 'El DNI es obligatorio';
    } else if (formData.dni && !dniRegex.test(formData.dni)) {
        errors.dni = 'DNI Inválido';
    }

    if (requiredFields.includes('cell_phone') && !formData.cell_phone) {
        errors.cell_phone = 'El teléfono es obligatorio';
    } else if (formData.cell_phone && !phoneRegex.test(formData.cell_phone)) {
        errors.cell_phone = 'Número Inválido';
    }

    if (requiredFields.includes('cell_phone_secondary') && !formData.cell_phone_secondary) {
        errors.cell_phone_secondary = 'El teléfono es obligatorio';
    } else if (formData.cell_phone_secondary && !phoneRegex.test(formData.cell_phone_secondary)) {
        errors.cell_phone_secondary = 'Número Inválido';
    }

    if (requiredFields.includes('phone') && !formData.phone) {
        errors.phone = 'El teléfono es obligatorio';
    } else if (formData.phone && !phoneRegex.test(formData.phone)) {
        errors.phone = 'Número Inválido';
    }

    if (requiredFields.includes('address') && !formData.address) {
        errors.address = 'La dirección es obligatoria';
    } else if (formData.address && !addressRegex.test(formData.address)) {
        errors.address = 'Dirección Inválida';
    }

    if (requiredFields.includes('age') && !formData.age) {
        errors.age = 'La edad es obligatoria';
    } else if (formData.age && !ageRegex.test(formData.age)) {
        errors.age = 'Edad Inválida';
    }

    if (requiredFields.includes('gender_type') && !formData.gender_type) {
        errors.gender_type = 'Debes seleccionar alguna opción';
    }

    if (requiredFields.includes('auth_gender_type') && !formData.auth_gender_type) {
        errors.auth_gender_type = 'Debes seleccionar alguna opción';
    }

    if (
        requiredFields.includes('two_factor_enabled') &&
        !formData.two_factor_enabled
    ) {
        errors.two_factor_enabled =
            'Debes habilitar la autenticación en dos pasos';
    }

    if (requiredFields.includes('cuil') && !formData.cuil) {
        errors.cuil = 'El CUIL es obligatorio';
    } else if (formData.cuil && !cuilCuitRegex.test(formData.cuil)) {
        errors.cuil = 'El CUIL debe tener 11 dígitos';
    }

    if (requiredFields.includes('cuit') && !formData.cuit) {
        errors.cuit = 'El CUIT es obligatorio';
    } else if (formData.cuit && !cuilCuitRegex.test(formData.cuit)) {
        errors.cuit = 'El CUIT debe tener 11 dígitos';
    }

    if (requiredFields.includes('name_bussines') && !formData.name_bussines) {
        errors.name_bussines = 'El nombre de la empresa es obligatorio';
    } else if (
        formData.name_bussines &&
        !nameBusinessRegex.test(formData.name_bussines)
    ) {
        errors.name_bussines = 'Nombre de empresa inválido';
    }

    if (requiredFields.includes('phone_bussines') && !formData.phone_bussines) {
        errors.phone_bussines = 'El teléfono de la empresa es obligatorio';
    } else if (
        formData.phone_bussines &&
        !phoneRegex.test(formData.phone_bussines)
    ) {
        errors.phone_bussines = 'Número de empresa inválido';
    }

    if (
        requiredFields.includes('address_bussines') &&
        !formData.address_bussines
    ) {
        errors.address_bussines = 'La dirección de la empresa es obligatoria';
    } else if (
        formData.address_bussines &&
        !addressRegex.test(formData.address_bussines)
    ) {
        errors.address_bussines = 'Dirección de empresa inválida';
    }

    if (
        requiredFields.includes('address_bussines') &&
        !formData.address_bussines
    ) {
        errors.address_bussines = 'La dirección de la empresa es obligatoria';
    } else if (
        formData.address_bussines &&
        !addressRegex.test(formData.address_bussines)
    ) {
        errors.address_bussines = 'Dirección de empresa inválida';
    }

    if (requiredFields.includes('url') && !formData.url) {
        errors.url = 'La URL de tu empresa es obligatoria';
    } else if (
        formData.url &&
        !urlRegex.test(formData.url)
    ) {
        errors.url = 'Dirección URL inválida';
    }

    // Contar errores
    let numbErrors = 0;
    Object.entries(errors).forEach((e) => {
        if (e[1]) numbErrors++;
    });

    return {
        ...errors,
        hasErrors: !!numbErrors,
    };
};

// VALIDA LOS PASSWORD PARA EL CAMBIO DE CONTRASEÑA
export const validateNewPassword = (passwordForm: FormNewPassword) => {
    let flag = false;
    const { old_password, new_password, new_password_2 } = passwordForm;

    const errors: ObjectPasswordChecks = {
        pass_length: new_password.length >= 8,
        pass_uppercase: /[A-Z]/.test(new_password),
        pass_lowercase: /[a-z]/.test(new_password),
        pass_specialCaracter: /[!@#$%^&*(),.?":{}|<>]/.test(new_password),
        pass_number: /[0-9]/.test(new_password),
        pass_2: new_password === new_password_2 && new_password.length > 0,
        pass_new_old: new_password !== old_password,
    };

    if (
        errors.pass_length &&
        errors.pass_lowercase &&
        errors.pass_uppercase &&
        errors.pass_number &&
        errors.pass_specialCaracter &&
        new_password === new_password_2 &&
        new_password !== old_password &&
        old_password.length > 5
    ) {
        flag = true;
    }
    return {
        errors,
        flag,
    };
};
