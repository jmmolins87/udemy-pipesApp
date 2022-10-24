import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusclasPipe implements PipeTransform {

    transform( valor: string, type: boolean ): string {
        return type ? valor.toUpperCase() : valor.toLowerCase();
    }

}
