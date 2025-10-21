import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";

export interface IRepositoryPersonas {

    getListadoCompletoPersonas(): Persona[];
}

@injectable()
export class PersonasRepository implements IRepositoryPersonas {


    getListadoCompletoPersonas(): Persona[] {


        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
        ];
    }
}

export class PersonasRepositoryEmpty implements IRepositoryPersonas {


    getListadoCompletoPersonas(): Persona[] {

        return [

        ];
    }

}

export class PersonasRepository100 implements IRepositoryPersonas {
    getListadoCompletoPersonas(): Persona[] {

        return [
            new Persona(1, 'Persona1', 'Apellido1'),
            new Persona(2, 'Persona2', 'Apellido2'),
            new Persona(3, 'Persona3', 'Apellido3'),
            new Persona(4, 'Persona4', 'Apellido4'),
            new Persona(5, 'Persona5', 'Apellido5'),
            new Persona(6, 'Persona6', 'Apellido6'),
            new Persona(7, 'Persona7', 'Apellido7'),
            new Persona(8, 'Persona8', 'Apellido8'),
            new Persona(9, 'Persona9', 'Apellido9'),
            new Persona(10, 'Persona10', 'Apellido10'),
            new Persona(11, 'Persona11', 'Apellido11'),
            new Persona(12, 'Persona12', 'Apellido12'),
            new Persona(13, 'Persona13', 'Apellido13'),
            new Persona(14, 'Persona14', 'Apellido14'),
            new Persona(15, 'Persona15', 'Apellido15'),
            new Persona(16, 'Persona16', 'Apellido16'),
            new Persona(17, 'Persona17', 'Apellido17'),
            new Persona(18, 'Persona18', 'Apellido18'),
            new Persona(19, 'Persona19', 'Apellido19'),
            new Persona(20, 'Persona20', 'Apellido20'),
            new Persona(21, 'Persona21', 'Apellido21'),
            new Persona(22, 'Persona22', 'Apellido22'),
            new Persona(23, 'Persona23', 'Apellido23'),
            new Persona(24, 'Persona24', 'Apellido24'),
            new Persona(25, 'Persona25', 'Apellido25'),
            new Persona(26, 'Persona26', 'Apellido26'),
            new Persona(27, 'Persona27', 'Apellido27'),
            new Persona(28, 'Persona28', 'Apellido28'),
            new Persona(29, 'Persona29', 'Apellido29'),
            new Persona(30, 'Persona30', 'Apellido30'),
            new Persona(31, 'Persona31', 'Apellido31'),
            new Persona(32, 'Persona32', 'Apellido32'),
            new Persona(33, 'Persona33', 'Apellido33'),
            new Persona(34, 'Persona34', 'Apellido34'),
            new Persona(35, 'Persona35', 'Apellido35'),
            new Persona(36, 'Persona36', 'Apellido36'),
            new Persona(37, 'Persona37', 'Apellido37'),
            new Persona(38, 'Persona38', 'Apellido38'),
            new Persona(39, 'Persona39', 'Apellido39'),
            new Persona(40, 'Persona40', 'Apellido40'),
            new Persona(41, 'Persona41', 'Apellido41'),
            new Persona(42, 'Persona42', 'Apellido42'),
            new Persona(43, 'Persona43', 'Apellido43'),
            new Persona(44, 'Persona44', 'Apellido44'),
            new Persona(45, 'Persona45', 'Apellido45'),
            new Persona(46, 'Persona46', 'Apellido46'),
            new Persona(47, 'Persona47', 'Apellido47'),
            new Persona(48, 'Persona48', 'Apellido48'),
            new Persona(49, 'Persona49', 'Apellido49'),
            new Persona(50, 'Persona50', 'Apellido50'),
            new Persona(51, 'Persona51', 'Apellido51'),
            new Persona(52, 'Persona52', 'Apellido52'),
            new Persona(53, 'Persona53', 'Apellido53'),
            new Persona(54, 'Persona54', 'Apellido54'),
            new Persona(55, 'Persona55', 'Apellido55'),
            new Persona(56, 'Persona56', 'Apellido56'),
            new Persona(57, 'Persona57', 'Apellido57'),
            new Persona(58, 'Persona58', 'Apellido58'),
            new Persona(59, 'Persona59', 'Apellido59'),
            new Persona(60, 'Persona60', 'Apellido60'),
            new Persona(61, 'Persona61', 'Apellido61'),
            new Persona(62, 'Persona62', 'Apellido62'),
            new Persona(63, 'Persona63', 'Apellido63'),
            new Persona(64, 'Persona64', 'Apellido64'),
            new Persona(65, 'Persona65', 'Apellido65'),
            new Persona(66, 'Persona66', 'Apellido66'),
            new Persona(67, 'Persona67', 'Apellido67'),
            new Persona(68, 'Persona68', 'Apellido68'),
            new Persona(69, 'Persona69', 'Apellido69'),
            new Persona(70, 'Persona70', 'Apellido70'),
            new Persona(71, 'Persona71', 'Apellido71'),
            new Persona(72, 'Persona72', 'Apellido72'),
            new Persona(73, 'Persona73', 'Apellido73'),
            new Persona(74, 'Persona74', 'Apellido74'),
            new Persona(75, 'Persona75', 'Apellido75'),
            new Persona(76, 'Persona76', 'Apellido76'),
            new Persona(77, 'Persona77', 'Apellido77'),
            new Persona(78, 'Persona78', 'Apellido78'),
            new Persona(79, 'Persona79', 'Apellido79'),
            new Persona(80, 'Persona80', 'Apellido80'),
            new Persona(81, 'Persona81', 'Apellido81'),
            new Persona(82, 'Persona82', 'Apellido82'),
            new Persona(83, 'Persona83', 'Apellido83'),
            new Persona(84, 'Persona84', 'Apellido84'),
            new Persona(85, 'Persona85', 'Apellido85'),
            new Persona(86, 'Persona86', 'Apellido86'),
            new Persona(87, 'Persona87', 'Apellido87'),
            new Persona(88, 'Persona88', 'Apellido88'),
            new Persona(89, 'Persona89', 'Apellido89'),
            new Persona(90, 'Persona90', 'Apellido90'),
            new Persona(91, 'Persona91', 'Apellido91'),
            new Persona(92, 'Persona92', 'Apellido92'),
            new Persona(93, 'Persona93', 'Apellido93'),
            new Persona(94, 'Persona94', 'Apellido94'),
            new Persona(95, 'Persona95', 'Apellido95'),
            new Persona(96, 'Persona96', 'Apellido96'),
            new Persona(97, 'Persona97', 'Apellido97'),
            new Persona(98, 'Persona98', 'Apellido98'),
            new Persona(99, 'Persona99', 'Apellido99'),
            new Persona(100, 'Persona100', 'Apellido100')


        ];
    }
}