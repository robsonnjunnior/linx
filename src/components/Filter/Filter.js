import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import SagaTypes from 'store/saga/types'
import {
  Label,
  Container,
  FormControl,
  Input,
  Form,
  SearchButton,
  Icon
} from './styles'

function Filter() {
  const { t } = useTranslation()
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = e => {
    e.preventDefault()

    if (text.trim().length > 0) {
      dispatch({ type: SagaTypes.FETCH_WEATHER, payload: text, t })
    }
  }

  return (
    <Container>
      <Label>
        {t('SELECT_A_CITY')}
      </Label>
      <Form onSubmit={onSubmit}>
        <FormControl>
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={t('SEARCH_BY_CITY')}
            data-testid='search-input'
          />
          <SearchButton data-testid='search-button' type="submit">
            <Icon
              alt={t('SEARCH_ICON')}
              src={require('assets/search.png')}
            />
          </SearchButton>
        </FormControl>
      </Form>
    </Container>
  )
}

export default Filter
