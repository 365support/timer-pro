import { ComponentProps, ElementType } from "react";

/**
 * @description T와 K에서 T의 프로퍼티를 제거한 타입을 병합합니다.
 */
export type Combine<T, K> = T & Omit<K, keyof T>;

/**
 * @description CombineElementProps는 두 가지 타입의 중복 제거 후 병합합니다.
 *
 * @template T React 요소 타입 (예: 'div', 'span' 등)
 * @template K 사용자 정의 props 타입
 * @returns React 요소 T의 기본 props와 사용자 정의 props K의 중복 제거 후 병합한 새로운 타입
 */
export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentProps<T>
>;
