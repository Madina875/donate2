import { PartialType } from '@nestjs/swagger';
import { CreateSaveItemDto } from './create-save_item.dto';

export class UpdateSaveItemDto extends PartialType(CreateSaveItemDto) {}
