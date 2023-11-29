/**
 * @author RRG
 */

import { ApiProperty } from "@nestjs/swagger"

export class TransactionDto {

    @ApiProperty({ description : "accountExternalIdDebit " , type : String })
    accountExternalIdDebit : string

    @ApiProperty({ description : "accountExternalIdCredit " , type : String })
    accountExternalIdCredit : string

    @ApiProperty({ description : "tranferTypeId " , type : Number })
    tranferTypeId : number

    @ApiProperty({ description : "value " , type : Number })
    value : number

    @ApiProperty({ description : "status " , type : Number })
    status : number

    @ApiProperty({ description : "createdat " , type : Number })
    createdAt : string
}