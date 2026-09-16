import type { Page } from '../types/document'
import type { TemplateStatus } from '../types/template'
import { model, Schema, type Document as MongoDocument } from 'mongoose'

const textConfigSchema = new Schema(
  {
    content: { type: String, required: true },
    fontFamily: { type: String, required: true },
    fontSize: { type: Number, required: true },
    fontWeight: { type: Number, required: true },
    color: { type: String, required: true },
    align: {
      type: String,
      enum: ['left', 'center', 'right'],
      required: true,
    },
  },
  { _id: false },
)

const tableCellSchema = new Schema(
  {
    id: { type: String, required: true },
    value: { type: String, default: '' },
  },
  { _id: false },
)

const tableRowSchema = new Schema(
  {
    id: { type: String, required: true },
    cells: { type: [tableCellSchema], default: [] },
  },
  { _id: false },
)

const tableConfigSchema = new Schema(
  {
    columns: { type: Number, required: true },
    rows: { type: [tableRowSchema], default: [] },
    borderWidth: { type: Number, default: 1 },
    borderColor: { type: String, default: '#D1D5DB' },
    cellPadding: { type: Number, default: 8 },
    rowSpacing: { type: Number, default: 0 },
  },
  { _id: false },
)

const imageConfigSchema = new Schema(
  {
    src: { type: String, default: '' },
    alt: { type: String, required: false },
    objectFit: {
      type: String,
      enum: ['contain', 'cover', 'fill'],
      default: 'contain',
    },
  },
  { _id: false },
)

const shapeConfigSchema = new Schema(
  {
    kind: {
      type: String,
      enum: ['rectangle', 'circle', 'line'],
      required: true,
    },
    fill: { type: String, required: true },
    borderColor: { type: String, required: true },
    borderWidth: { type: Number, default: 1 },
    borderRadius: { type: Number, default: 0 },
  },
  { _id: false },
)

const elementSchema = new Schema(
  {
    id: { type: String, required: true },
    type: {
      type: String,
      enum: ['text', 'table', 'image', 'shape'],
      required: true,
    },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    zIndex: { type: Number, default: 0 },
    locked: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    text: { type: textConfigSchema, required: false },
    table: { type: tableConfigSchema, required: false },
    image: { type: imageConfigSchema, required: false },
    shape: { type: shapeConfigSchema, required: false },
  },
  { _id: false },
)

const pageSchema = new Schema(
  {
    id: { type: String, required: true },
    order: { type: Number, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    background: { type: String, default: '#ffffff' },
    elements: { type: [elementSchema], default: [] },
  },
  { _id: false },
)

const templateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    pages: {
      type: [pageSchema],
      default: [],
    },
    version: {
      type: Number,
      default: 1,
    },
    status: {
      type: String,
      enum: ['draft', 'active', 'archived'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  },
)

// Unique so a duplicate name cannot silently shadow the frontend's `by-name` autoload. Built at
// boot outside production only — `npm run indexes` applies it explicitly, because the build fails
// if duplicates already exist and that must not block startup.
templateSchema.index({ name: 1 }, { unique: true })
templateSchema.index({ updatedAt: -1 })

export interface TemplateDocument extends MongoDocument {
  name: string
  pages: Page[]
  version: number
  status: TemplateStatus
  createdAt: Date
  updatedAt: Date
}

export const TemplateModel = model<TemplateDocument>('Template', templateSchema)
